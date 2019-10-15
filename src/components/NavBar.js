import React from "react";
import { Link } from "react-router-dom";
import history from "../history";

import "./styles/navbar.css";

const NavBar = () => {
  const change = "/jj";

  const active = "nav-item nav-link active-link ";
  const inactive = "nav-item nav-link";

  return (
    <nav className="navbar navbar-expand-lg py-0 px-0 bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav nav-fill w-100">
          <Link to="/" className={change === "/" ? active : inactive}>
            <i className="fas fa-home size" />
            <span className="icons-header">Home</span>
          </Link>
          <Link
            to="/messages"
            className={change === "/messages" ? active : inactive}
          >
            <i className="fas fa-envelope size" />
            <span className="icons-header">Messages</span>
          </Link>
          <Link
            to="wishlist"
            className={change === "/wishlist" ? active : inactive}
          >
            <i className="fas fa-star size" />
            <span className="icons-header">Wishlist</span>
          </Link>
          <Link
            to="settings"
            className={change === "/settings" ? active : inactive}
          >
            <i className="fas fa-cog size" />
            <span className="icons-header">Settings</span>
          </Link>
          <Link
            to="account"
            className={change === "/account" ? active : inactive}
          >
            <i className="fas fa-user size" />
            <span className="icons-header">My Account</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
