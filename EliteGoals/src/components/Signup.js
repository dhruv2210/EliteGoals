import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Signup = () => {
  const [{ ph }, dispatch] = useStateValue();
  console.log("aaaaaaaaaaaaa",ph.ph)
  const history = useNavigate();
  const [user, setUser] = useState({
    fname: "", lname: "", dob: "", email: "", phone: ph.ph, aadharNumber: "", pyin: "", pswd: "", cpswd: ""
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
      
      <div className="main">

        

          <form id="form" className="row form-control-lg">
            <div className="col-6 mt-3 mb-2">
              <input className="form-control"
                type="text"
                name="fname"
                value={user.fname}
                onChange={handleInputs}
                placeholder="First name" required=""
              />
            </div>

            <div className="col-6 mt-3 mb-2">
              <input className="form-control"
                type="text" name="lname"
                value={user.lname}
                onChange={handleInputs}
                placeholder="Last name" required=""
              />
            </div>

            <div className="col-6 mt-3 mb-2">
              <input className="form-control"
                type="tel" name="phone"
                value={ph.ph}
                onChange={handleInputs}
                placeholder="Mobile Number" required="" pattern="[6789][0-9]{9}"
                title="Please enter valid phone number"
                readOnly={true}
              />
            </div>

            <div className="col-6 mt-3 mb-2">
              <input className="form-control"
                type="date" name="dob"
                value={user.dob}
                onChange={handleInputs}
                placeholder="D.O.B." required=""
              />
            </div>

            <div className="col-12 mt-3 mb-2">
     
              <input className="form-control"
                type="email" name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Email"  pattern=".+@globex\.com" size="30" required
              />
            </div>

            <div className="col-12 mt-3 mb-2">
              <input className="form-control"
                type="text" name="aadharNumber"
                value={user.aadharNumber}
                onChange={handleInputs}
                placeholder="Aadhar Number"
                required
              />
            </div>

            <div className="col-12 mt-3 mb-2">
              <input className="form-control"
                type="textarea" name="address"
                value={user.address}
                onChange={handleInputs}
                placeholder="Address"
                required
              />
            </div>

            <div className="col-md-12 mt-2 mb-2">
              <input
                className="form-control"
                type="text" name="pyin"
                value={user.pyin}
                onChange={handleInputs}
                placeholder="Products You Interested in..." required="" />
            </div>

            <div className="col-6 mt-3 mb-2">
              <input className="form-control"
                type="password" id='password' name="pswd"
                value={user.pswd}
                onChange={handleInputs}
                placeholder="Password" required=""
              />
            </div>

            <div className="col-6 mt-3 mb-2">
              <input className="form-control"
                type="password" id='confirm_password' name="cpswd"
                value={user.cpswd}
                onChange={handleInputs}
                placeholder="Confirm Password"
                required=""
              /> <span id='message'></span>
            </div>

            <div className="col-12 mt-2 mb-2">
              <input type="checkbox"  required/> <a href="/">Agree to terms and condition.</a>
            </div>

            <div className="col-12 mt-2 mb-2">
              <button className="btn btn-outline-light" type="submit" name="Login" id="login" value="register" onClick={PostData}  ><b>Register </b></button>
            </div>

          </form>
      </div>
    </div>
  )
}

export default Signup;



