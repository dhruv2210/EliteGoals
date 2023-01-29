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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return <>

  <Router>
        <Navbar></Navbar>
        <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route exact path="/Contactus" element={<Contactus></Contactus>} />
            <Route exact path="/AboutUs" element={<AboutUs/>} />
            <Route exact path="/Goals" element={<Goals/>} />
            <Route exact path="/SetGoal" element={<SetGoal/>} />
            <Route exact path="/Login" element={<Login></Login>} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/AddProduct" element={<AddProduct></AddProduct>} />
        </Routes>
        <Footer></Footer>
        
  </Router>
</>;
}

export default App;

