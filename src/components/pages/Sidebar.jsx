import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { closeSidebar } from "../../features/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const sidebarRef = useRef();
  useEffect(() => {
    const changingSize = window.addEventListener("resize", (e) => {
      const sidebarWidth = sidebarRef?.current?.getBoundingClientRect();
      const { width } = sidebarWidth;
      if (width >= 1100) {
        dispatch(closeSidebar());
      }
    });
  }, [dispatch, sidebarRef]);
  const sidebars = isSidebarOpen ? "showSidebar sidebar" : "sidebar";
  return (
    <div className={sidebars} ref={sidebarRef}>
      <aside>
        <div className="sidebar__header">
          <div className="nav__brand">
            shop <span>Online</span>
          </div>
          <button
            className="nav__menu sidebar__menu"
            onClick={() => dispatch(closeSidebar())}
          >
            <ImCross />
          </button>
        </div>
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <button
              className="sidebar__btn"
              onClick={() => dispatch(closeSidebar())}
            >
              <Link to="">Home</Link>
            </button>
          </li>
          <li className="sidebar__item">
            <button
              className="sidebar__btn"
              onClick={() => dispatch(closeSidebar())}
            >
              <Link to="">Products</Link>
            </button>
          </li>
          <li className="sidebar__item">
            <button
              className="sidebar__btn"
              onClick={() => dispatch(closeSidebar())}
            >
              <Link to="/about">About</Link>
            </button>
          </li>
          <li className="sidebar__item">
            <button
              className="sidebar__btn"
              onClick={() => dispatch(closeSidebar())}
            >
              <Link to="">Contact</Link>
            </button>
          </li>
        </ul>
        <div className="sidebar__cart--container">
          <button className="sidebar__btn">
            <Link to="" className="sidebar__cart--image">
              <span className="sidebar__cart--info">
                <FaShoppingCart />
                <span className="sidebar__cart--count">0</span>
              </span>
            </Link>
          </button>
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
