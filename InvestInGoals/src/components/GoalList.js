import moment from "moment";
import React, { useState ,useEffect} from 'react';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';
const date1 = require('date-and-time')
  
let flag=false;
let payment_count=1;
let paymentsMiss=0;
let remainingPayment=0;
let dur=0;

let dbdate;

const GoalList = () => {
  const [userp, setUserp] = useState([]);
  const [{ goal },dispatch] = useStateValue();
  // console.log('goallist>>>', goal);
  const history = useNavigate();
 
  const [userData, setUserData] = useState("");
  const [goal1, setGoal] = useState([]);

    let count=0;

    useEffect(() => 
    {
      callProfilePage(); 
    }, []);

  const callProfilePage = async () => {
    try {
      count++;
      if(count<5){
        const res = await fetch('/profile', {
          method: "GET",
          headers: {
            "Content-Type": "Application/json"
          },      
          credentials: "include"
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);
        setGoal(data.goals); 
        setUserp(data);

        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } 
    } catch (error) {
      console.log(error);
      history('/Login');
    }
  }



 const removeFromGOal = (e,id)=>{
    e.preventDefault();
    dispatch({
      type:"REMOVE_FROM_GOAL",
      id:id,
    })
 }

 function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

 const [name, setName] = useState('Dev')

  return (
    <div>
      <br></br>
      <br></br>
      <br></br> 
      {
        goal1.map((prod,i=0) => (
        <span className="rowwise" key={i}>
          <div className="col-md-12">
            <div className="step">
            <img id='goalsimg'
                    src={prod.imgURL}
                    alt="Image"
                    className="img-fluid"
                  />
              <h4><b>Product:</b> {prod.title}</h4>             
              <h4><b>Price:</b> {prod.price}/-</h4>
              {/* <h4>{prod.price75}/-</h4> */}
          
              <h4><b>Duration: </b>{prod.duration}</h4>
              <h4><b>Installment: </b> {prod.monthlyprice}/-</h4>
              <h5>Remaining Installments: {prod.duration-payment_count}</h5>
        
              <button type="submit" className="goalbutton btn btn-outline-light" 
             		onClick={ async function displayRazorpay() {
                
   const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

   if (!res) {
     alert('Razorpay SDK failed to load. Are you online?')
     return
   }

   const  monthlypricee = prod.monthlyprice;
   const  duration = prod.duration;
   const id=prod._id;
   console.log("+++++++++++",monthlypricee);
   const data = await fetch('http://localhost:5000/razorpay', 
   { 
    method: 'POST',
     headers: {
            "Content-Type": "application/json"
          },
     body: JSON.stringify({
          monthlypricee
    })}).then((t) =>
     t.json()
   )

   console.log("miaaaaaaaaaaaaaaaaaaaaaaaa")
  //  callProfilePage();
   const options = {

     key: 'rzp_test_cMV1GfmpfhYe5T',
     currency: data.currency,
     amount: data.amount.toString(),
     order_id: data.id,
     name: 'Installment',
     description: 'Thank you for nothing.',
     image: 'http://localhost:5000/logo.svg',
     handler: async function (response) {

       
  if(userp.goals==undefined){
      payment_count=1;
    }
    else{
      userp.goals.map((pp)=>{
           if(pp._id==id){
            const pay=pp.payment;     
            payment_count=pay.length+1;
            const a=pay.length-1;
            console.log("AAAAAAAAAAAAAAAAAAA",payment_count)
            // console.log("xx",pp.payment) 
            // console.log("xx",pp.payment[a]) 
            // console.log("xx",pp.payment[a].nextdate) 
            dbdate=pp.payment[a].nextdate
            dur=pp.payment[a].duration
           }
      })
    } 
    remainingPayment=dur-payment_count;
    const date=new Date(Date.now())
       var day =  60 * 60 * 24 * 1000;
       const nextdate=new Date(Date.now()+((payment_count*30)*day))


      function convert(str) {
              var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
              return [date.getFullYear(), mnth, day].join("-");
      }


      let date1=convert(date);
      let dbdate1=moment(dbdate).utc().format('YYYY-MM-DD');
      console.log("++++",date1)
      console.log("++++",dbdate1)

       if(date1 > dbdate1){
       
       ++paymentsMiss
     }
      console.log("++++",paymentsMiss)

 const payment_id=response.razorpay_payment_id
       flag=true  
       const data = await fetch('/payment', 
          { method: 'POST',
            headers: {
                    "Content-Type": "application/json"
                  },
            body: JSON.stringify({
                  payment_count,payment_id,monthlypricee,duration,date,nextdate,id
            })
          })
          const result = await data.json();
          if(result){
           callProfilePage();
     }
     
   console.log("______________",userp)
       
   //  console.log("4444444444444444444444444444444444",userp.goals)     
       alert(payment_count)
       
       //30 day duration
      //  a=a+30;
       
      //  const dd=date
if(payment_count<dur){
  DiscountAlgo();
}

function DiscountAlgo(){

let goalsCompleted=0;
let paymentsMissed=paymentsMiss;
let duration=dur;

let minDiscount=2;
let midDiscount=5;
let maxDiscount=10;

const total=100;
let obtainedPoints=0;

//for GoalsCompleted
{
    if(goalsCompleted>=10)
    {
        obtainedPoints +=20;
    }
    else if(goalsCompleted<10 && goalsCompleted>=8)
    {
        obtainedPoints +=15;
    }
    else if(goalsCompleted<8 && goalsCompleted>=4)
    { 
        obtainedPoints +=10;
    }
    else{
        obtainedPoints +=5;
    }
}

//for Duration
{

          if(duration==6)
          {
              obtainedPoints += 7.5;
          }
          else if(duration==12)
          {
              obtainedPoints += 15;
          }
          else if(duration==24)
          {
              obtainedPoints += 22.5;
          }
          else if(duration==36)
          {
              obtainedPoints += 30;
          }
}

//for Payments
{
                      obtainedPoints+=50;
                      let paymentPercentage=90;

                      let percentageMissed=(paymentsMissed*100)/duration;
                      
                      if(percentageMissed>0 && percentageMissed<=10)
                      {
                          obtainedPoints -=10;
                      }
                      else if(percentageMissed>10 && percentageMissed<=20)
                      {
                          obtainedPoints -=20;
                      }
                      else if(percentageMissed>20 && percentageMissed<=30)
                      {
                          obtainedPoints -=30;
                      }
                      else if(percentageMissed>30 && percentageMissed<=50)
                      {
                          obtainedPoints -=40;
                      }
                      else if(percentageMissed>50 )
                      {
                          obtainedPoints -=50;
                      }
}

console.log(obtainedPoints)

              if(obtainedPoints>=70)
              {
                  console.log(maxDiscount)
              }
              else if(obtainedPoints <70 && obtainedPoints>=45)
              {
                  console.log(midDiscount)
              }             
              else
              {
                  console.log(minDiscount)
              }
} 
     },
     prefill: {
       name,
       email: 'sdfdsjfh2@ndsfdf.com',
       phone_number: '9899999999'
     }
   }
   const paymentObject = new window.Razorpay(options)
   paymentObject.open()
  //  callProfilePage();
  //  callProfilePage();
  //  callProfilePage();
 }
 }> Payment </button>
              <button type="submit" className="btn btn-white" onClick={(e)=>removeFromGOal(e,prod._id)} > Remove </button>
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
