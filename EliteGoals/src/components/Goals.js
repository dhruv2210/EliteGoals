import axios from 'axios';
import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../StateProvider";
import { useNavigate } from 'react-router-dom';
import "./css/Goals.css";


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


  return (
 
    products &&
    products?.data.map((product,i) => (
      
     
       <div className='products rowwise'>
     
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
                 

                  dispatch({
                    type: 'ADD_TO_BASKET',
                    item: {
                      id:product._id,
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
    </div>
    ))
    
  );
              
}
export default Home;


