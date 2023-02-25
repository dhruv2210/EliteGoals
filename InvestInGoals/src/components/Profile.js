import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../App";

// let userData=[];
const Profile = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useNavigate();
  const [userData, setUserData] = useState([]);
  // const callProfilePage = async () => {
  //   try {
  //     const res = await fetch('/profile', {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },  
  //       credentials: "include"
  //     });


  //     const data = await res.json();
  //     console.log(data);
  //     setUserData(data);


  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }

  //   } catch (error) {
  //     console.log(error);
  //     history('/Login');
  //   }
  // }

  // useEffect(() => {
  //   callProfilePage();
  // }, []);


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
      if (res.status != 200) {
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
      <div>
        <span className="rowwise">
          <div className="col-md-12" >
            <div className="step">
              <h3>{userData.fname}</h3>
              <h3>{userData.lname}</h3>
              <h3>{userData.dob}</h3>
              <h3>{userData.phone}</h3>
              <h3>{userData.pyin}</h3>
              <h3>{userData.email}</h3>
              <h3>{userData.aadharNumber}</h3>
              <h3>{userData.fname}</h3>
              <button type="submit" className="goalbutton btn btn-outline-light" onClick={logout}> Logout </button>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}

export default Profile
