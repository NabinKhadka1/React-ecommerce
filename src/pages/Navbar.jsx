import { MdMenu } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__center">
        <div className="nav__header">
          <div className="nav__brand">
            shop <span>Online</span>
          </div>
          <button className="nav__menu">
            <MdMenu />
          </button>
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
          <Link to="" className="cart__image">
            <span className="cart__info">
              <FaShoppingCart />
              <span className="cart__image--count">0</span>
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
