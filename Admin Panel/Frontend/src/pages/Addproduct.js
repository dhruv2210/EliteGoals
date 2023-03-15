import axios from 'axios';
import React, { useState } from "react";
import styled from "styled-components";
function Addproduct() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const addproduct = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/productsadd", { title, imageURL, desc,price, rating });
      console.log(data);
    } catch (err) {
      console.log(err);
    }

  };
  return (
<>
  <div className="container box col" data-aos="fade-up">
      
      <h3 className="addProductHead">Add Product</h3>
      
      <div className="col-12 mt-2 mb-2">
      </div>
      
      <form id="enterinfo" className="row form-control-lg">
        <div className="col-12 mt-3 mb-2">
          Title: <input className="form-control"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required=""
          />
        </div>

        <div className="col-12 mt-3 mb-2">
          ImageURL: <input className="form-control"
            type="text"
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
            required=""
          />
        </div>
        <div className="col-12 mt-3 mb-2">
          Product Description: <input className="form-control"
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            required=""
          />
        </div>

        <div className="col-12 mt-3 mb-2">
          Price: <input id='priceinput' className="form-control"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required=""
          />
        </div>

        <div className="col-12 mt-3 mb-2">
          Rating: <input className="form-control"
            type="number" min="1" max="5"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            required=""
          />
        </div>

        <div className="col-12 mt-2 mb-2">
        </div>
        
        <div className="col-12 mt-2 mb-2">
          <button className="btn btn-outline-dark" type="submit" name="Login" id="login" value="addProduct" onClick={addproduct}><b>Add Product</b></button>
        </div>

      </form>
    </div>

    </>
  
  );
}



export default Addproduct;

