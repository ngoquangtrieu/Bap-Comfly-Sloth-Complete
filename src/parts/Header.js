import "../css/cssParts/Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UseContext";

function Header(props) {
  const { loginWithRedirect, user, logout } = useContext(userContext);
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg" />
        </div>
        <ul className="listPage listPageLeft">
          <li className="page">
            <Link to="/">Home</Link>
          </li>
          <li className="page">
            <Link to="/About">About</Link>
          </li>
          <li className="page">
            <Link to="/Products">Products</Link>
          </li>
        </ul>
        <ul className="listPage listPageRight">
          <li className="page">
            <Link className="pageRight" to="/Cart">
              Cart<i className="fa-solid fa-cart-shopping"></i>
              <div className="totalItem"><span>{props.title}</span></div>
            </Link>
          </li>
          {user != undefined ? (
            <li className="page">
              <div className="pageRight" onClick={logout}>
                Logout<i className="fa-solid fa-user-minus"></i>
              </div>
            </li>
          ) : (
            <li className="page">
              <div className="pageRight" onClick={loginWithRedirect}>
                Login<i className="fa-solid fa-user-plus"></i>
              </div>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Header;
