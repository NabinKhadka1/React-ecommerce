import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <aside>
        <div className="sidebar__header">
          <div className="nav__brand">
            shop <span>Online</span>
          </div>
          <button className="nav__menu sidebar__menu">
            <ImCross />
          </button>
        </div>
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <button className="sidebar__btn">
              <Link to="">Home</Link>
            </button>
          </li>
          <li className="sidebar__item">
            <button className="sidebar__btn">
              <Link to="">Products</Link>
            </button>
          </li>
          <li className="sidebar__item">
            <button className="sidebar__btn">
              <Link to="/about">About</Link>
            </button>
          </li>
          <li className="sidebar__item">
            <button className="sidebar__btn">
              <Link to="">Contact</Link>
            </button>
          </li>
        </ul>
        <div className="sidebar__cart--container">
          <div className="sidebar__btn">
            <Link to="" className="sidebar__cart--image">
              <span className="sidebar__cart--info">
                <FaShoppingCart />
                <span className="sidebar__cart--count">0</span>
              </span>
            </Link>
          </div>
          <div className="sidebar__btn">
            <Link to="" className="sidebar__login">
              Login
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
