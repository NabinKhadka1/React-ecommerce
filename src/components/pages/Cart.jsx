import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItem,
  clearCart,
  removeItem,
  decrementQuantity,
  calculateTotals,
  calculateDiscounts,
} from "../../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals(cart.cartItems));
  }, [cart, dispatch]);
  useEffect(() => {
    dispatch(calculateDiscounts(cart.cartItems));
  }, [cart, dispatch]);

  return (
    <div className="shopcart__container">
      <h2 className="text-center">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart__empty">
          <p>Your cart is currenty empty</p>
          <div className="continue-shopping">
            <Link to="/" className="btn btn__continueshopping">
              continue shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="shopping__cart">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems?.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>
                    <div className="cart__info">
                      <img src={cartItem.thumbnail} alt={cartItem.title} />
                      <div>
                        <p>{cartItem.title}</p>
                        <small>
                          Price:
                          <span className="cart__price--info">
                            Rs {cartItem.price.toFixed(2)}
                          </span>
                        </small>
                        <br />
                        <button
                          className="btn__remove"
                          onClick={() => dispatch(removeItem(cartItem))}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="cart__quantity">
                      <button
                        onClick={() => dispatch(decrementQuantity(cartItem))}
                      >
                        -
                      </button>
                      <div className="count">{cartItem.qty}</div>
                      <button onClick={() => dispatch(addItem(cartItem))}>
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    Rs {`${Number(cartItem.qty * cartItem.price).toFixed(2)}`}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="cart__summary">
                <td className="d-flex">
                  <button
                    className="btn btn__clearcart"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart
                  </button>
                </td>
                <td></td>
                <td className="cart__total--summary">
                  <div className="d-flex">
                    <h4 className="cart__summary--heading">Subtotal:</h4>
                    <span className="cart__price--info">
                      Rs {cart.totalCart.amount}
                    </span>
                  </div>
                  <div className="d-flex">
                    <h4 className="cart__summary--heading">Discount:</h4>
                    <span className="cart__price--info">
                      Rs {`${Number(cart.totalDiscount.damount).toFixed(2)}`}
                    </span>
                  </div>
                  <div className="d-flex">
                    <h4 className="cart__summary--heading">Payment Total:</h4>
                    <span className="cart__price--info">
                      Rs{" "}
                      {`${Number(
                        cart.totalCart.amount - cart.totalDiscount.damount
                      ).toFixed(2)}`}
                    </span>
                  </div>
                  <Link
                    to="/"
                    className="btn btn__checkout mt-2"
                    disabled={true}
                  >
                    Checkout
                  </Link>
                  <Link to="/" className="btn btn__continueshopping mt-2">
                    Continue Shopping
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
