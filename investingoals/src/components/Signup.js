import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import "./login.css";


const Signup = () => {
  
  const history = useNavigate();
  const [user, setUser] = useState({
    fname: "", lname: "", dob: "", email: "", phone: "", aadharNumber: "", pyin: "", pswd: "", cpswd: ""
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user, [name]: value
    });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { fname, lname, dob, email, phone, aadharNumber, pyin, pswd, cpswd } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, lname, dob, email, phone, aadharNumber, pyin, pswd, cpswd
        
      })
    });
    const data = await res.json();
    
    if (data.status === 422 || !data) {
      window.alert("INvalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful l");
      console.log("Successfull Registration");
      history("/login");
    }
  }
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="main">
          {/* <input type="checkbox" id="chk" aria-hidden="true"></input> */}
          <div className="signup">
            <form className='form' method="post">
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <div className="wrapper">
                <input type="text" name="fname"
                  value={user.fname}
                  onChange={handleInputs}
                  placeholder="First name" required=""></input>
                <input type="text" name="lname"
                  value={user.lname}
                  onChange={handleInputs}
                  placeholder="Last name" required=""></input>
              </div>
              <div className="wrapper">
                <input type="date" name="dob"
                  value={user.dob}
                  onChange={handleInputs}
                  placeholder="D.O.B." required=""></input>
                <input type="text" name="pyin"
                  value={user.pyin}
                  onChange={handleInputs}
                  placeholder="Products You Interested in..." required=""></input>
              </div>

              <input type="email" name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Email" required=""></input>
              <input type="text" name="aadharNumber" 
                value={user.aadharNumber}
                onChange={handleInputs}
                placeholder="Aadhar Number"
                 required=""></input>
              <div className="wrapper">
                <input type="password" id='password' name="pswd"
                  value={user.pswd}
                  onChange={handleInputs}
                  placeholder="Password" required=""
                ></input>
                <input type="password" id='confirm_password' name="cpswd"
                  value={user.cpswd}
                  onChange={handleInputs}
                  placeholder="Conform Password"
                  required=""></input>
                <span id='message'></span>
              </div>

              <div className="wrapper">
                <input type="tel" name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Mobile Number" required="" pattern="[6789][0-9]{9}"
                  title="Please enter valid phone number"></input>
                {/* <button>Send OTP</button> */}
              </div>
              {/* <input type="text" name="otp" placeholder="Enter the OTP" required=""></input> */}
              <input type="submit" name="signup" id="signup" value="register" onClick={PostData}/>Register
            </form>
          </div>
        </div>
      </div>
    )
  }
  // <input type="submit" name="signup" id="signup" value="register" onClick={PostData}>Register</input>

export default Signup;



// import React from 'react'

// const Signup = () => {
//   return (
//     <div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       sdfghjsdfghgj szdfghdasdfgh asdfghjk wertyui asdfghjk xcvbnqwertyui
//     </div>
//   )
// }

// export default Signup
