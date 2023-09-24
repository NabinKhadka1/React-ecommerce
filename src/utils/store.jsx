import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebarSlice";
import productsReducer from "../features/productsSlice";
import productdetailReducer from "../features/productdetailSlice";
import cartReducer from "../features/cartSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    products: productsReducer,
    singleProduct: productdetailReducer,
    cart: cartReducer,
  },
});
export default store;
