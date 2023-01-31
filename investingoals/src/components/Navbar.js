import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className = "navbar-mobile";
    } else {
      x.className = "navbar";
    }
  }
  const [isActive, setisActive] = useState(false);
  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-scrolled"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1>
            <a href="/">EliteGoals</a>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink className="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
            <NavLink className="" to="/Goals">
                Goals
              </NavLink>
            </li>
            <li>
              <a href="/AboutUs">About Us</a>
            </li>
            <li>
              <NavLink className="" to="/Contactus">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/AddProduct">
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/Login">
                Login/Signup
              </NavLink>
            </li>
          </ul>
          <i onClick={() =>myFunction()} id="myTopnav" className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
