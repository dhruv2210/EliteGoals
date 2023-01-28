import React from 'react';
import { useStateValue } from '../StateProvider';

const SetGoal = () => {
  const [{ basket }] = useStateValue();
  console.log('chheckout>>>', basket);

  // const data= basket.size()-1;
  // console.log(data);

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>

      {
        basket?.map((product) => (
        
          <div className="col order-md-1 order-sm-1 order-xs-1">

            {/* <!-- ======= Contact Details Section ======= --> */}
            <div className="container box" data-aos="fade-up">

              <form id="enterinfo" className="row form-control-lg">
                <div className="col-12 mt-3 mb-2">
                  <input type="text" className="form-control" id="inputAddress"  defaultValue={product.price} readOnly/>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                  <input type="text" className="form-control" id="inputEmail4" defaultValue={product.title} readOnly/>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                  <input type="password" className="form-control" id="inputPassword4"
                    placeholder="Your Mobile" />
                </div>
                <div className=" col-12 mt-2 mb-2 ">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  {/* <label for="floatingTextarea">Comments</label> */}
                </div>
                <div className="col-12 mt-2 mb-2">
                  <button type="submit" className="btn btn-outline-light"><b>Add To Goal </b></button>
                </div>
              </form>
            </div>
          </div>
        ))}


    </div>
  )
}

export default SetGoal
