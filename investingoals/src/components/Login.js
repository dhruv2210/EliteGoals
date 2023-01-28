import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { Link ,Outlet } from "react-router-dom";
// import Signup from "./Signup";
// import "./login.css";

const Login = () => {

  const history = useNavigate();


  const [phone, setPhone] = useState('');
  const [pswd, setPswd] = useState('');

  const loginuser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone, pswd
      })
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      window.alert("login successfull");
      history("/");
    }

  }





  return (

    <div>

      <br />
      <br />
      <br />

      <br />
      <br />
      <div className="main">
        {/* <input type="checkbox" id="chk" aria-hidden="true"></input> */}

        <div className="login">
          <form method="POST">
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile Number"

              id="checkkk"
              required=""
              // maxlength="13"
              pattern="^((\+91[0-9]{10})|(0[0-9]{10}))$"
              title="Please enter valid phone number"
            ></input>

            <input
              type="password"
              name="pswd"
              value={pswd}
              onChange={(e) => setPswd(e.target.value)}
              placeholder="Password"
              required=""
            ></input>


            <input type="submit" name="Login" id="login" value="login" onClick={loginuser} />
            <a className="" href="/Signup">
              Do not have account?
            </a>
          </form>
        </div>
      </div>

  
    </div>
  );
}


export default Login;



// {/* <div className="container">

// {/* <!-- ======= Form Section ======= --> */}

// <div className="col order-md-1 order-sm-1 order-xs-1">

//   {/* <!-- ======= Contact Details Section ======= --> */}
//   <div className="container box" data-aos="fade-up">

//     <form id="enterinfo" class="row form-control-lg" method="POST">
//       <div class="col-md-6 mt-2 mb-2">

//         <input type="tel"
//           name="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           placeholder="Mobile Number"

//           required=""
//           // maxlength="13"
//           pattern="^((\+91[0-9]{10})|(0[0-9]{10}))$"
//           title="Please enter valid phone number" class="form-control" id="inputEmail4" />
//       </div>
//       <div class="col-md-6 mt-2 mb-2">

//         <input
//           type="password"
//           name="pswd"
//           value={pswd}
//           onChange={(e) => setPswd(e.target.value)}
//           placeholder="Password"
//           required="" class="form-control" id="inputPassword4"
//         />
//       </div>

//       <div class="col-12 mt-2 mb-2">
//       <input type="submit" name="Login" id="login" value="login" className="btn btn-outline-light" onClick={loginuser} />
//       <a className="" href="/Signup">
//       Do not have account?
//     </a>
//         {/* <button type="submit" className="btn btn-outline-light"><b>Login </b></button> */}
//       </div>
//     </form>
//   </div>



// </div>
// </div> */}