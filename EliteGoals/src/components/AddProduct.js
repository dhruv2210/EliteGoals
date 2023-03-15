import axios from 'axios';
import "./addProduct.css";
import React, { useState } from "react";
import styled from "styled-components";
function AddProduct() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const addProduct = async (e) => {
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
<br></br>
<br></br>
  <div className="container box col-5" data-aos="fade-up">
      
      <h3 className="addProductHead">Add Product</h3>
      <form id="enterinfo" className="row form-control-lg">
        <div className="col-12 mt-3 mb-2">
          Title: <input className="form-control"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
          />
        </div>

        <div className="col-12 mt-3 mb-2">
          ImageURL: <input className="form-control"
            type="text"
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
            placeholder="ImageURL"
          />
        </div>
        <div className="col-12 mt-3 mb-2">
          Product Description: <input className="form-control"
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            placeholder="Product Description"
          />
        </div>

        <div className="col-12 mt-3 mb-2">
          Price: <input className="form-control"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>

        <div className="col-12 mt-3 mb-2">
          Rating: <input className="form-control"
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </div>



        <div className="col-12 mt-2 mb-2">
          <button className="btn btn-outline-light" type="submit" name="Login" id="login" value="addProduct" onClick={addProduct}><b>Add Product</b></button>
        </div>

      </form>
    </div>

    </>
  
  );
}



export default AddProduct;
