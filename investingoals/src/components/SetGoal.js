import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';

const SetGoal = () => {
  const [{ basket }] = useStateValue();
  console.log('chheckout>>>', basket);
  // const data= basket.size()-1;
  // console.log(data);
  
  const [val, setVal] = useState('');
  const data = [6,12,24,36];
  const a=0;

  function setValue(e) {
    a=e.target.value;
    setVal(e.target.value);
   console.log(a);
  }
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

              <form id="enterinfo" class="row form-control-lg">
                <div class="col-12 mt-3 mb-2">
                  <input type="text" class="form-control" id="inputAddress" defaultValue={product.title} readOnly />
                </div>
                <div class="col-md-6 mt-2 mb-2">
                  Product Price: <input type="text" class="form-control" id="inputEmail4" defaultValue={product.price} readOnly />
                </div>
                <div class="col-md-6 mt-2 mb-2">
                  Product of 75% :<input type="text" class="form-control" id="inputEmail4" defaultValue={((product.price) * 75) / 100} readOnly />
                </div>
                <div class="col-md-6 mt-2 mb-2">
                  Instalment Per Month :<input type="text" class="form-control" id="inputEmail4" defaultValue={a} readOnly />
                </div>


                <div>
                  <select value={val} onChange={setValue}>
                    {
                      data.map(opt => <option>{opt}</option>)
                    }
                  </select>

                  Months
                  <h1>{val}</h1>

                </div>


                <div class="col-md-6 mt-2 mb-2">
                  <input type="password" class="form-control" id="inputPassword4"
                    placeholder="Your Mobile" />
                </div>
                <div class=" col-12 mt-2 mb-2 ">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  {/* <label for="floatingTextarea">Comments</label> */}
                </div>
                <div class="col-12 mt-2 mb-2">
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
