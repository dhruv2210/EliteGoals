import React from "react";
import "./AboutUs.css";
// import "../style.css";
function AboutUs() {
  return (
    <>
      <section className="hero-section inner-page">
        <div className="wave">
          <svg
            width="1920px"
            height="265px"
            viewBox="0 0 1920 265"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Apple-TV"
                transhtmlform="translate(0.000000, -402.000000)"
                fill="#FFFFFF"
              >
                <path
                  d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z"
                  id="Path"
                ></path>
              </g>
            </g>
          </svg>
        </div>


        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center hero-text">
                  <h1 data-aos="fade-up" data-aos-delay="0">
                    About Us
                  </h1>
                  <p className="mb-5" data-aos="fade-up" data-aos-delay="100">
                    INVEST IN YOUR GOALS !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container col-8 box boxSizeAboutus" data-aos="fade-up">
        <br></br>
      <div className="parentpara">
        <h3 className="aboutParaHead">  <b>Welcome to EliteGoals!</b> </h3>
      </div>
    
      <p className="aboutPara aboutParaHead">
      We believe that everyone should have the opportunity to invest in their goals, and we strive to make our services accessible and affordable for all. With Invest in Goal, you can take control of your financial future and start working towards the things that matter to you.
        
      <br/>
      <br/>
      We are a website dedicated to helping you achieve your goals. Whether you want to save for a new car, a motorcycle, or any other big purchase, we are here to support you every step of the way. We understand that setting goals can be challenging, and we believe that by providing you with the tools and resources you need, we can make it easier for you to achieve your dreams.
      </p>

      <div className="parentpara">
      <p className="social">
            <a href="/"><span className="bi bi-twitter"></span></a>   &nbsp;
            <a href="/"><span className="bi bi-facebook"></span></a>  &nbsp;
            <a href="/"><span className="bi bi-instagram"></span></a> &nbsp;
            <a href="/"><span className="bi bi-linkedin"></span></a>
      </p>
      </div>
      </div>
    </>
  );
}


export default AboutUs;