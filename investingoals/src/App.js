import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contactus from "./components/Contactus";
import AboutUs from "./components/AboutUs";
import Goals from "./components/Goals";
import SetGoal from "./components/SetGoal";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddProduct from "./components/AddProduct";
import Profile from "./components/Profile";
import GoalList from "./components/GoalList";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState,UseReducer } from "./reducer/UseReducer";
// import GoalList from "./components/GoalList";

// 1: contextAPI
export const UserContext = createContext();


const Routing = () => {
  return (
   <>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/Contactus" element={<Contactus></Contactus>} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Goals" element={<Goals />} />
        <Route exact path="/SetGoal" element={<SetGoal />} />
        <Route exact path="/Login" element={<Login></Login>} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/AddProduct" element={<AddProduct></AddProduct>} />
        <Route exact path="/Profile" element={<Profile></Profile>} />
        <Route exact path="/GoalList" element={<GoalList/>} />
      </Routes>
      <Footer></Footer>
      </>
  )
}

function App() {

  const [state, dispatch] = useReducer(UseReducer, initialState)

  return (

    <>
      <Router>
      {/* changes done here ...... */}
        <UserContext.Provider value={{state,dispatch}}> 
          <Navbar></Navbar>
          <Routing/>
        </UserContext.Provider>
      </Router>
    </>)
}

export default App;

