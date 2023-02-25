import React, { useState ,useEffect} from 'react';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';
import axios from "axios";




  // const [userData, setUserData] = useState({fname:"", email:"", phone:"", message:""});



const GoalList = () => {
  const [{ goal },dispatch] = useStateValue();
  console.log('goal list>>>', goal);
  const history = useNavigate();
 
  const [userData, setUserData] = useState();
  const [goal1, setGoal] = useState("");

  const callProfilePage = async () => {
    try {
      const res = await fetch('/profile', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        
        credentials: "include"
      });


      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      history('/Login');
    }
  }

  const fetchdata = async () => {
    const data = await axios.get("/getdata");
    setGoal(data.goals[0]);
    console.log(data);
  };
  
  useEffect(() => 
  {
      callProfilePage();
      fetchdata();
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
    
{
        goal?.map((prod,i) => (
            <span className="rowwise" key={i}>
        <div className="col-md-12">
          <div className="step">
          <img id='goalsimg'
                  src={prod.imageURL}
                  alt="Image"
                  className="img-fluid"
                />
            <h3>{prod.title}</h3>
            {/* <p>{product.desc}</p> */}
            
            <h4>{prod.price}/-</h4>
            <h4>{prod.price}/-</h4>
            <h4>{prod.month}</h4>
            <h4>{prod.monthlyprice}/-</h4>
        
            <button type="submit" className="goalbutton btn btn-outline-light" > Payment </button>
            <br/>     
          </div>
        </div>    
  </span>
        ))}
    </div>
  )
}

export default GoalList
























































































// import React,{useEffect} from 'react'
// import { useDispatch,useSelector } from 'react-redux';
// import { addToCart,removeFromCart } from '../components/cartAction';
// import { Link } from 'react-router-dom';
// import MessageBox from "../components/MessageBox";
// // import "../styles/Cart.css"
// import CancelIcon from '@material-ui/icons/Cancel';


// const Cart = (props) => {

//     const productID = props.match.params.id;
//     const qty = props.location.search ? 
//         Number(props.location.search.split('=')[1])
//         : 1;

    
//     const cart = useSelector((state) => state.cart);
//     const { cartItems, error } = cart;

//     console.log(productID);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         if(productID){
//             dispatch(addToCart(productID,qty));
//         }
//     }, [dispatch, productID, qty])


//     const removeProduct = (id) =>{
//         dispatch(removeFromCart(id));
//     }

//     const checkOut =() =>{
//         props.history.push('/shipping');
//     }

//     return (
//         <div>
//             <Link to="/" className="back-res">Back to home</Link>

//             <div className="row-container">
//                 <div className="col-4">
//                     <h1>Shopping Cart</h1>
//                     {cartItems.length === 0 ? (
//                         <MessageBox>
//                             Cart is empty. <Link to="/">Go Shopping</Link>
//                         </MessageBox>
//                     ) : (
//                         <ul>
//                             {
//                                 cartItems.map((item)=>(
//                                     <li key={item.product}>
//                                         <div className="row1">
//                                             <div className="small">
//                                                 <img src={item.image}
//                                                 alt= ""
//                                                 ></img>
//                                             </div>

//                                             <div className="min-30">
//                                                 <Link to={`/products/product/${item.product}`}>{item.name}</Link>
//                                             </div>
//                                             <div className="qty-select">
//                                                 <select value={item.qty} 
//                                                 onChange={(e) => 
//                                                 dispatch(addToCart(item.product,Number(e.target.value)))
//                                                 }>
//                                                 {
//                                                     [...Array(item.stock).keys()].map((x)=>(
//                                                         <option value={x+1}>{x+1}</option>
//                                                     ))
//                                                 }
//                                                 </select>
//                                             </div>
//                                             <p>${item.price * item.qty}</p>
//                                             <div className="remove-btn">
//                                                 <button type="button" onClick={() => removeProduct(item.product)}>
//                                                     <CancelIcon/>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     )}
//                 </div>

//                 <div className="col-5">
//                     <div className="card card-body">
//                         <ul>
//                             <li>
//                                 <p>
//                                     Subtotal ({cartItems.reduce((a, c) => {
//                                         return a + c.qty;
//                                     }, 0)} items) : 
//                                 </p>
//                                 <p className="price">$ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
//                             </li>
//                             <li>
//                                 <button type="button" onClick={checkOut}
//                                 className="checkout-btn"
//                                 disabled={cartItems.length === 0}
//                                 >
//                                     Proceed to Checkout
//                                 </button>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//             </div>

//         </div>
        
//     )
// }
// export default Cart
