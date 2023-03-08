import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../App";

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