import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';
// import { set } from 'mongoose';


const SetGoal = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log('setgoal >>>', basket);
  const history = useNavigate();

  const [val, setVal] = useState(0);
  const [mp, setmp] = useState(0);
  const [userData, setUserData] = useState({});
  let a = 0;


  let bs=((basket[0].price) * 75) / 100;
  
  function setValue(e) {
    a = e.target.value;
    setVal(e.target.value);
    console.log(a);
    let mp=bs/a;
    setUserData({title:basket[0].title, price: basket[0].price, price75: bs, monthlyprice: mp,duration:a,imgURL:basket[0].imgURL});
  }


  const data = [6, 12, 24, 36];
  
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <>
      <div>
        <br></br>
        <br></br>
        <br></br>
        {
          basket?.map((product, i) => (
            <div className="col order-md-1 order-sm-1 order-xs-1" key={i}>

              <div className="container box" data-aos="fade-up">

                <form id="enterinfo" class="row form-control-lg">
                  <div class="col-12 mt-3 mb-2">
                    <input type="text" className="form-control" name="title" value={product.title}
                      onChange={handleInputs} />
                  </div>
                  <div class="col-md-6 mt-2 mb-2">
                    Product Price: <input type="number" className="form-control" name="price" value={product.price}
                      onChange={handleInputs} />
                  </div>
                  <div className="col-md-6 mt-2 mb-2">
                    Product of 75% :<input type="number" className="form-control" name="price75" value={((product.price) * 75) / 100}
                      onChange={handleInputs} />
                  </div>
                  <div className="col-md-6 mt-2 mb-2">
                    Instalment Per Month :<input type="number" className="form-control" name="monthlyprice" value={(((product.price) * 75) / 100) / val}
                      onChange={handleInputs} />
                  </div>

                  <div>
                    <select value={val} onChange={setValue}>
                      {
                        data.map(opt => <option>{opt}</option>)
                      }
                    </select>
                    <font color="white">Months</font>
                  </div>
                  <div className="col-12 mt-2 mb-2">
                    <button type="submit" className="btn btn-outline-light" onClick={async (e) => {
                      e.preventDefault();

                      const { title, price, price75, monthlyprice,duration,imgURL} = userData;
                      const res = await fetch("/goal", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          title, price, price75, monthlyprice,duration,imgURL
                        })
                      });

                      const data = await res.json();

                      if (!data) {
                        console.log("goal form NOTT sent");
                      } else {
                        alert("Goal Setted");
                        console.log("goal form sent");
                        setUserData({ ...userData, message: "" })
                      }

                      dispatch({
                        type: 'ADD_TO_GOAL',
                        item: {
                          id:product.id,
                          title: product.title,
                          imgURL: basket[0].imgURL,
                          price: product.price,
                          price75:bs,
                          monthlyprice:mp,
                          month:val
                        }
                      })
                      history("/GoalList");

                    }}><b>Set to Goal </b></button>
                  </div>
                </form>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default SetGoal
