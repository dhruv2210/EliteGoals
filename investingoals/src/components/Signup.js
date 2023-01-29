import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';




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
      <section className="hero-section inner-page">
        
       
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center hero-text">
                  <h1 data-aos="fade-up" data-aos-delay="0">
                    Signup
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="main">

        <div className="container signup box col-6" data-aos="fade-up">

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
                value={user.phone}
                onChange={handleInputs}
                placeholder="Mobile Number" required="" pattern="[6789][0-9]{9}"
                title="Please enter valid phone number"
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
                placeholder="Email" required=""
              />
            </div>

            <div className="col-12 mt-3 mb-2">
              <input className="form-control"
                type="text" name="aadharNumber"
                value={user.aadharNumber}
                onChange={handleInputs}
                placeholder="Aadhar Number"
                required=""
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
              <input type="checkbox"  required=""/> <a href="">Agree to terms and condition.</a>
            </div>

            <div className="col-12 mt-2 mb-2">
              <button className="btn btn-outline-light" type="submit" name="Login" id="login" value="register" onClick={PostData}  ><b>Register </b></button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;



