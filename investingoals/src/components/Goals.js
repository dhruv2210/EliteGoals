import axios from 'axios';
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Products from '../../../mernbackend/src/models/Products';
import Card from "./Card";
import { useStateValue } from "../StateProvider";
// import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

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



  console.log('basket>>>>', basket);

  return (
    products &&
    products?.data.map((product) => (
   <div className='hello'>
     
        {/* <section className="section"> */}
          <div className="container" data-aos="fade-up">
            <div className="row">

              <div className="col-md-4">
                <div className="step" style={{maxWidth:'60vh'}}>
                  <img
                    src={product.imageURL}
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>{product.title}</h3>
                  <br />
                  <p>{product.price}/-</p>
                  <button type="submit" className="btn btn-outline-light" onClick={(e) => {
                    //  e.preventDefault();

                    dispatch({
                      type: 'ADD_TO_BASKET',
                      item: {
                        title:product.title,
                        imgURL:product.imageURL,
                        price:product.price
                      }
                    })
                    history("/SetGoal");
                  }}><b>Add to Goal </b></button>
                </div>
              </div>
            </div>
          </div>
        {/* </section> */}
      </div>
        // <div>
        // <div className="col-lg-4 mb-4 mb-lg-0">
        //         <div className="pricing h-100 text-center">
        //           <span className="popularity">Best Value</span>
        //           <h3>IPhone 14</h3>
        //           <p>(128 gb)</p>
        //           <ul className="list-unstyled">
        //             <li>MRP: Rs. 80000 /-</li>
        //             <li>Get discounts upto 20%</li>
        //             <li>Effective Price: Rs. 64000 /-</li>
        //           </ul>
        //           <div className="price-cta">
        //             <strong className="price">Rs. 5400/month</strong>
        //             <p>for 12 months.</p>
        //             <p>
        //               <a href="#" className="btn btn-white">
        //                 Add Goal
        //               </a>
        //             </p>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
      
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
//         -webkit-mask-image: none;
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
