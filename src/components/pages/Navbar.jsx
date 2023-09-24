import { MdMenu } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../../features/sidebarSlice.jsx";

const Navbar = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="nav__center">
        <div className="nav__header">
          <div className="nav__brand">
            shop <span>Online</span>
          </div>
          {!isSidebarOpen && (
            <button
              className="nav__menu"
              onClick={() => dispatch(openSidebar())}
            >
              <MdMenu />
            </button>
          )}
        </div>
        <ul className="list-items">
          <li className="list-item">
            <Link to="">Home</Link>
          </li>
          <li className="list-item">
            <Link to="">Products</Link>
          </li>
          <li className="list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="list-item">
            <Link to="">Contact</Link>
          </li>
        </ul>
        <div className="cart__container">
          <Link to="/cart" className="cart__image">
            <span className="cart__info">
              <FaShoppingCart />
              <span className="cart__image--count">
                {cart.totalCart.quantity}
              </span>
            </span>
          </Link>
          <div className="user__info">
            <Link to="" className="user__login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
