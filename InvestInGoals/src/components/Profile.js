import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../App";
import "./profile.css";

// let userData=[];
const Profile = () => {

  const { dispatch } = useContext(UserContext);
  const history = useNavigate();
  const [userData, setUserData] = useState([]);


  const logout = async () => {
    fetch('/logout', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then((res) => {
      history('/login', { replace: true });
      dispatch({ type: "USER", payload: false })
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    }).catch((err) => {
      console.log(err);
    });
  }


  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('/profile');
      console.log("Ayuuuuuuuuuuuuuuuuuuuuuuuuuu mayuuuuuuuuuuuuuuuu", response)
      setUserData(response.data);
    }
    getUser();
  }, []);



  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="container d-flex justify-content-center">
            <div class="col-xl-10 col-md-12">
              <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                      <div class="m-b-25">
                        <br/>
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                      </div>
                      <h3 class="f-w-600">{userData.fname}  <br/>{userData.lname}</h3>
                      {/* <p>Web Designer</p> */}
                      <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <br/>
                      <h5 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h5>
                        <br/>
                      <div class="row">
                        <br/>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Email</p>
                          <h4 class="text-bold f-w-400">{userData.email}</h4>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Phone</p>
                          <h4 class="text   f-w-400">+{userData.phone}</h4>
                        </div>
                      </div>
                      <br/>
                      {/* <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6> */}
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Date of Birth</p>
                          <h4 class="text f-w-400">{userData.dob} </h4>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Aadhar Number</p>
                          <h4 class="text f-w-400">{userData.aadharNumber}</h4>
                        </div>
                      </div>
                      <br/>
                      <br/>
                      <div className="col-md-12 mb-12 mb-md-6">
          
          <p className="social row">
            <a href="#"><span className="bi bi-twitter"></span> </a>{"\u00a0\u00a0\u00a0\u00a0"}
            <a href="#"><span className="bi bi-facebook"></span></a>{"\u00a0\u00a0\u00a0\u00a0"}
            <a href="#"><span className="bi bi-instagram"></span></a>{"\u00a0\u00a0\u00a0\u00a0"}
            <a href="#"><span className="bi bi-linkedin"></span></a>{"\u00a0\u00a0\u00a0\u00a0"}
          </p>
        </div>
                    </div>
                    <div className="col-12 mt-2 mb-2">
                  <button type="submit" className="goalbutton btn btn-outline-light" onClick={logout}> <a href="/login">Logout</a> </button>
                  <br/>
                  <br/>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    


    </>
  );
}

export default Profile



// const [userData,setUserData] = useState({
//   title:"",
//   price:0,
//   price75:0,
//   monthlyprice:0
// })

// const setValue = (e) => {
//   setVal(e.target.value);
// let bs=((basket[0].price) * 75) / 100;
//   setmp(bs/mp);
//   setUserData({monthlyprice:mp,title:basket[0].title, price:basket[0].price, price75:bs});
//   console.log(userData);
// }

// const handleInputs = (e) => {
//   const name = e.target.name;
//   const value = e.target.value;
//   setUserData({ ...userData, [name]: value });
// }