import axios from 'axios';
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
// import Products from '../../../mernbackend/src/models/Products';
import Card from "./Card";
import { useStateValue } from "../StateProvider";
// import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import "./Goals.css";


function Home() {
  const history = useNavigate();
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/productsget");
      setProducts(data);
    };
    fetchdata();
  }, []);
  const [{ basket }, dispatch] = useStateValue();
  //console.log('goal>>>>', basket.length);

  return (
    
    products &&
    products?.data.map((product,i) => (
     <span className="rowwise" key={i}>
        
            <div className="col-md-12" >
              <div className="step">
                <img id='goalsimg'
                  src={product.imageURL}
                  alt="Image"
                  className="img-fluid"
                />
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                
                <h4>{product.price}/-</h4>
                <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />

                <br/>
                <button type="submit" className="goalbutton btn btn-outline-light" onClick={(e) => {
                  //  e.preventDefault();

                  dispatch({
                    type: 'ADD_TO_BASKET',
                    item: {
                      title: product.title,
                      imgURL: product.imageURL,
                      price: product.price
                    }
                  })
                  history("/SetGoal");
                }}>Add to Goal </button>
              </div>
            </div>    
     
      </span>
    
    ))
  );
}


// function Home() {
//   const [products, setProducts] = useState("");

//   useEffect(() => {
//     const fetchdata = async () => {
//       const data = await axios.get("/products/get");
//       setProducts(data);
//     };
//     fetchdata();
//   }, []);



//   return (

//         {products &&
//           products?.data.map((product) => (

//               id={product._id}
//               image={product.imageURL}
//               price={product.price}
//               rating={product.rating}
//               title={product.title}

//           ))}

//   );



// }

// const Container = styled.div`
//   width: 100%;
//   background-color: rgb(234, 237, 237);
//   max-width: 1400px;
//   margin: auto;
//   height: fit-content;
// `;

// const Banner = styled.div`
//   width: 100%;
//   img {
//     width: 100%;
//     -webkit-mask-image: linear-gradient(
//       to bottom,
//       rgba(0, 0, 0, 2),
//       rgba(0, 0, 0, 0.95),
//       rgba(0, 0, 0, 0.85),
//       rgba(0, 0, 0, 0.75),
//       rgba(0, 0, 0, 0.55),
//       rgba(0, 0, 0, 0)
//     );

//     &:nth-child(2) {
//       display: none;
//     }

//     @media only screen and (max-width: 767px) {
//       &:nth-child(1) {
//         display: none;
//       }

//       &:nth-child(2) {
//         display: block;
//         -webkit-mask-image: none;m
//       }
//     }
//   }
// `;

// const Main = styled.div`
//   display: grid;
//   justify-content: center;
//   place-items: center;
//   width: 100%;

//   grid-auto-rows: 420px;
//   grid-template-columns: repeat(4, 280px);
//   grid-gap: 20px;

//   /* Mobile */
//   @media only screen and (max-width: 767px) {
//     grid-template-columns: repeat(2, 50%);
//     grid-gap: 0;
//   }

//   /* Tablets */

//   @media only screen and (min-width: 767px) and (max-width: 1200px) {
//     grid-template-columns: repeat(3, 30%);
//   }

//   @media only screen and (min-width: 767px) {
//     margin-top: -130px;
//     padding: 10px 0px;
//   }
// `;
export default Home;
