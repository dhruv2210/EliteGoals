import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

function Navbar() {

  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return <>
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
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className="" to="/GoalList">
                    Goal List
                  </NavLink>
                </li>
                <li>
                <NavLink className="" to="/AboutUs">
                      AboutUs
                    </NavLink>
                </li>
                <li>
                  <NavLink className="" to="/Contactus">
                    Contact Us
                  </NavLink>
                </li>
                
                <li>
                  <NavLink className="" to="/Profile">
                    Profile
                  </NavLink>
                </li>
              </ul>
              <i onClick={() => myFunction()} id="myTopnav" className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>

      </>
    }
    else {
      return (
        <>
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
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/GoalList">
                      Goal List
                    </NavLink>
                  </li>
                  <li>
                  <NavLink className="" to="/AboutUs">
                      AboutUs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/Contactus">
                      Contact Us
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink className="" to="/Login">
                      Login/Signup
                    </NavLink>
                  </li>
                </ul>
                <i onClick={() => myFunction()} id="myTopnav" className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </header>
        </>
      )
    }
  }

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
    <>
      <RenderMenu />
    </>
  );
}

export default Navbar;
