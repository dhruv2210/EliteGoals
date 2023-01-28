import React from 'react';
import { useStateValue } from '../StateProvider';

const SetGoal = () => {
  const [{ basket }] = useStateValue();
  console.log('chheckout>>>', basket);

  // const data= basket.size()-1;
  // console.log(data);

  return (
    <div>
       {
        basket?.map((product) => (
        <section className="section">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-4">
                <div className="step">
                  <img
                    src={product.imageURL}
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>{product.title}</h3>
                  <br />
                  <p>{product.price}/-</p>
                  <button type="submit" className="btn btn-outline-light" ><b>Add to Goal </b></button>
                </div>
              </div>
            </div>
          </div>
        </section>    
          ))} 


    </div>
  )
}

export default SetGoal
