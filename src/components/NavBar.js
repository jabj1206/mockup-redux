import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/navbar.css";

class NavBar extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg py-0 px-0 bg-light">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav nav-fill w-100">
        <Link to='/' className="nav-item nav-link active " href="/"><i className="fas fa-home"/><span className=''>Home</span></Link>
        <Link to='/messages' className="nav-item nav-link" href="/"><i className="fas fa-envelope"/><span className=''>Messages</span></Link>
        <Link to='wishlist' className="nav-item nav-link" href="/"><i className="fas fa-star"/><span className=''>Wishlist</span></Link>
        <Link to='settings' className="nav-item nav-link" href="/"><i className="fas fa-cog"/><span className=''>Settings</span></Link>
        <Link to='account' className="nav-item nav-link" href="/"><i className="fas fa-user"/><span className=''>My Account</span></Link>
      </div>
    </div>
  </nav>
    );
  }
}

export default NavBar;
