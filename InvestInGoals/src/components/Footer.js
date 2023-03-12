import React from 'react'
import { NavLink } from "react-router-dom";


function Footer() {
return (

<footer className="footer" role="contentinfo">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <h3>About EliteGoals</h3>
          <p>It focuses on the company, the stakeholders and applications, which allow for online sales, distribution and marketing of electronics.</p>
          <p className="social">
            <a href="#"><span className="bi bi-twitter"></span></a>
            <a href="#"><span className="bi bi-facebook"></span></a>
            <a href="#"><span className="bi bi-instagram"></span></a>
            <a href="#"><span className="bi bi-linkedin"></span></a>
          </p>
        </div>
        <div className="col-md-7 ms-auto">
          <div className="row site-section pt-0">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3>Navigation</h3>
              <ul className="list-unstyled footer-li">
              <li>
                <a >
              <NavLink className="" to="/">
                  
                Home
              </NavLink>
                </a>
            </li> 
            <li>
              <NavLink className="" to="/GoalList">
                  
               Your Goals
              </NavLink>
            </li>
            <li>
            <NavLink className="" to="/AboutUS">
                  
                 About Us
                 </NavLink>
            </li>
            
            <li>
              <NavLink className="" to="/Login">
                Login/Signup
              </NavLink>
            </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h3>Services</h3>
              <ul className="list-unstyled footer-li">
                <li><a href="/contactus">Team</a></li>
                <li><a href="/contactus">Collaboration</a></li>
                <li><a href="/contactus">Advertisements</a></li>
                <li><a href="/">Chatbot</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h3>For any query</h3>
              <ul className="list-unstyled footer-li">
              <li>
              <NavLink className="" to="/Contactus">
                Contactus
              </NavLink>
            </li>
                {/* <li><a href="#">Get from the Play Store</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center text-center">
        <div className="col-md-7">
          <p className="copyright">&copy; Copyright Invest In Goals. All Rights Reserved</p>
          <div className="credits">
            Designed by Ayush , Dev & Dhruv.
          </div>
        </div>
      </div>

    </div>
  </footer>
  )
}

export default Footer
