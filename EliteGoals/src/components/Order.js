
import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider';

import "./piopup.css";

let flag = 0;
const Order = () => {

  const [goal1, setGoal] = useState([]);

  const [{ order }, dispatch] = useStateValue();
  console.log("order", order[0].id);
  const [userData, setUserData] = useState([]);



  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };



  useEffect(() => {
    callProfilePage();
  }, []);

  const callProfilePage = async () => {
    try {

      const res = await fetch('/profile', {
        method: "GET",
        headers: {
          "Content-Type": "Application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);

      setGoal(data.goals);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);

    }
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
      <br></br> <br></br> <br></br> <br></br> <br></br>
      {
        goal1.map((prod, i = 0) => (

          (prod._id == order[0].id) ? <span className="row" key={i}>
            <div class="page-content page-container" id="page-content">
              <div class="padding">
                <div class="container d-flex justify-content-center">
                  <div class="col-xl-12 col-md-12">
                    <div class="card user-card-full">
                      <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-white user-profile">
                          <div class="card-block text-center text-white">
                            <div class="m-b-25">
                              <br />

                              <div>
                                <img id='goalsimg'
                                  src={prod.imgURL}
                                  alt="Image"
                                  className="img-fluid"
                                />
                              </div>
                            </div>

                            <h3 class="f-w-600 black">{prod.title}</h3>

                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="card-block">
                            <br />
                            <h5 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h5>
                            <br />
                            <div class="row">
                              <br />

                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Price</p>
                                <h4 class="text   f-w-400">{prod.price}</h4>
                              </div>
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Installments</p>
                                <h4 class="text f-w-400">{prod.monthlyprice}</h4>
                              </div>
                            </div>
                            <br />

                            <div class="row">
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Duration</p>
                                <h4 class="text f-w-400">{prod.duration} </h4>
                              </div>

                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Remaining Payment</p>
                                <h4 class="text f-w-400">
                                  {((prod.price) - (prod.price) * (prod.discount[0]?.discount) / 100) - (prod.price75)}
                                </h4>
                              </div>
                            </div>

                          </div>
                          <div className="col-12 mt-2 mb-2">

                            <br />
                            <br />
                            {
                              (flag === 0) ? <button type="submit" className="goalbutton btn btn-outline-light"
                                onClick={async function displayRazorpay() {

                                  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

                                  if (!res) {
                                    alert('Razorpay SDK failed to load. Are you online?')
                                    return
                                  }

                                  const monthlypricee = prod.monthlyprice;
                                  const duration = prod.duration;
                                  const id = prod._id;
                                  const remaining_payment = ((prod.price) - (prod.price) * (prod.discount[0]?.discount) / 100) - (prod.price75)

                                  console.log("+++++++++++", monthlypricee);
                                  const data = await fetch('/orderpay',
                                    {
                                      method: 'POST',
                                      headers: {
                                        "Content-Type": "application/json"
                                      },
                                      body: JSON.stringify({
                                        remaining_payment
                                      })
                                    }).then((t) =>
                                      t.json()
                                    )


                                  const options = {

                                    key: 'rzp_test_cMV1GfmpfhYe5T',
                                    currency: data.currency,
                                    amount: data.amount.toString(),
                                    order_id: data.id,
                                    name: 'Installment',
                                    description: 'Thank you for nothing.',
                                    image: 'http://localhost:5000/logo.svg',
                                    handler: async function (response) {

                                      flag = 1;

                                    },
                                    prefill: {

                                      email: 'sdfdsjfh2@ndsfdf.com',
                                      phone_number: '9899999999'
                                    }
                                  }
                                  const paymentObject = new window.Razorpay(options)
                                  paymentObject.open()

                                }
                                }> Payment </button> : <button type="submit" className="goalbutton btn btn-outline-light" onClick={toggleDialog}>Order Now!</button>
                            }
                            {showDialog && (
                              <div className="dialog-container">
                                <div className="dialog-background" onClick={toggleDialog}></div>
                                <div className="dialog">
                                  <div className="dialog-content">
                                    <h2>Your Order has been placed successfully</h2>
                                    <p>Thank you for ordering</p>
                                    <button className="goalbutton btn btn-outline-light" onClick={toggleDialog}>Close</button>
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="container d-flex justify-content-between align-items-center">

                            </div>
                            <br />
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </span> : <h1></h1>
        ))}
    </div>
  )
}

export default Order
