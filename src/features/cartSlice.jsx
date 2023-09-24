import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [],
    totalCart: localStorage.getItem("totalCart")
      ? JSON.parse(localStorage.getItem("totalCart"))
      : { amount: 0, quantity: 0 },
    totalDiscount: localStorage.getItem("totalDiscount")
      ? JSON.parse(localStorage.getItem("totalDiscount"))
      : { damount: 0, dquantity: 0 },
  },
  reducers: {
    addItem: (state, action) => {
      const matchedIndex = state.cartItems.findIndex(
        (items) => items.id === action.payload.id
      );
      if (matchedIndex >= 0) {
        if (state.cartItems[matchedIndex].qty < action.payload.stock) {
          state.cartItems[matchedIndex].qty += 1;
        }
      } else {
        const newItem = {
          ...action.payload,
          qty: 1,
          product: action.payload.id,
        };
        state.cartItems.push(newItem);
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id != action.payload.id
      );
      state.cartItems = newCartItems;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    decrementQuantity: (state, action) => {
      const matchedIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[matchedIndex].qty > 1) {
        state.cartItems[matchedIndex].qty -= 1;
      } else if (state.cartItems[matchedIndex].qty === 1) {
        const newCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = newCartItems;
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    calculateTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;
          cartTotal.total += itemTotal;
          cartTotal.quantity += qty;
          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );

      state.totalCart.amount = total.toFixed(2);
      state.totalCart.quantity = quantity;
      localStorage.setItem("totalCart", JSON.stringify(state.totalCart));
    },
    calculateDiscounts: (state, action) => {
      let { totaldiscount, discountquantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, qty, discountPercentage } = cartItem;
          const itemTotal = price * qty * discountPercentage;
          const calcDisc = itemTotal / 100;
          cartTotal.totaldiscount += calcDisc;
          cartTotal.discountquantity += qty;
          return cartTotal;
        },
        { totaldiscount: 0, discountquantity: 0 }
      );

      state.totalDiscount.damount = totaldiscount.toFixed(2);
      state.totalDiscount.dquantity = discountquantity;
      localStorage.setItem(
        "totalDiscount",
        JSON.stringify(state.totalDiscount)
      );
    },
  },
});
export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  decrementQuantity,
  clearCart,
  calculateTotals,
  calculateDiscounts,
} = cartSlice.actions;
