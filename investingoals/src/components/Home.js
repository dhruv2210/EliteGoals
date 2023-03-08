import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <body>
        <Navbar />
        {/* Banner carousel */}
        <section className="hero-section" id="hero">
          <div className="wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="355px"
              viewBox="0 0 1920 355"
              version="1.1"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Apple-TV"
                  transform="translate(0.000000, -402.000000)"
                  fill="#FFFFFF"
                >
                  <path
                    d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                    id="Path"
                  ></path>
                </g>
              </g>
            </svg>
          </div>

          <div className="container" id="contain">
            <div className="row" id="banners">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
              >

                <div className="carousel-inner" style={{ height: "80vh" }}>
                  <div className="carousel-item active">
                    <div className="col-12 hero-text-image">
                      <div className="row">
                        <div className="col-lg-8 text-center text-lg-start">
                          <h1 data-aos="fade-right">Start Investing Now</h1>
                          <p
                            className="mb-5"
                            data-aos="fade-right"
                            data-aos-delay="2"
                          >
                            Set Your Goals and and get Discounts.
                          </p>
                          <p
                            data-aos="fade-right"
                            data-aos-delay="2"
                            data-aos-offset="50"
                          >
                            <NavLink className="btn btn-outline-white" to="/MyGoal">
                            Invest Now
                            </NavLink>
          
                          </p>
                        </div>
                        <div className="col-lg-4 iphone-wrap">
                          <img
                            src="assets/img/carousel1.png"
                            alt="Image"
                            className="phone-1"
                            data-aos="fade-right"
                          />

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-12 hero-text-image">
                      <div className="row">
                        <div className="col-lg-8 text-center text-lg-start">
                          <h1 data-aos="fade-right">Invest in Your Dreams!</h1>
                          <p
                            className="mb-5"
                            data-aos="fade-right"
                            data-aos-delay="2"
                          >
                            Set Your Goals and and get Discounts.
                          </p>
                          <p
                            data-aos="fade-right"
                            data-aos-delay="2"
                            data-aos-offset="50"
                          >
                           <NavLink className="btn btn-outline-white" to="/MyGoal">
                            Invest Now
                            </NavLink>
                          </p>
                        </div>
                        <div className="col-lg-4 iphone-wrap">
                          <img
                            src="assets/img/carousel3.png"
                            alt="Image"
                            className="phone-1"
                            data-aos="fade-right"
                          // style={{ width:"220" ,padding:"10px" }}
                          />

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-12 hero-text-image">
                      <div className="row">
                        <div className="col-lg-8 text-center text-lg-start">
                          <h1 data-aos="fade-right">
                            Set Your Goals and and get Discounts.
                          </h1>
                          <p
                            className="mb-5"
                            data-aos="fade-right"
                            data-aos-delay="2"
                          >
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. */}
                          </p>
                          <p
                            data-aos="fade-right"
                            data-aos-delay="2"
                            data-aos-offset="50"
                          >
                           <NavLink className="btn btn-outline-white" to="/MyGoal">
                            Invest Now
                            </NavLink>
                          </p>
                        </div>
                        <div className="col-lg-4 iphone-wrap">
                          <img
                            src="assets/img/carousel3.png"
                            alt="Image"
                            className="phone-1"
                            data-aos="fade-right"
                          />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Steps */}

        <section className="section">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-4">
                <div className="step">
                  <img
                    src="assets/img/11.png"
                    alt="Image"
                    className="img-fluid"
                  />
                  <span className="number">01</span>
                  <h3>Sign Up</h3>
                  <br />
                  <p>
                    Create your profile and get discounts on your dream
                    products.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="step">
                  <img
                    src="assets/img/22.png"
                    alt="Image"
                    className="img-fluid"
                  />
                  <span className="number">02</span>
                  <h3>Setup Goals</h3>
                  <br />
                  <p>Select your desired product and add to your goals.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="step">
                  <img
                    src="assets/img/33.png"
                    alt="Image"
                    className="img-fluid"
                  />
                  <span className="number">03</span>
                  <h3>Get Discounts</h3>
                  <br />
                  <p>Pay monthly installments and get amazing discounts!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Predefined goals */}
        <section className="section">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center text-center">
              <div className="col-md-7 mb-5">
                <h2 className="section-heading">Goals</h2>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere illum obcaecati inventore velit laborum earum.
                </p> */}
              </div>
            </div>
            <div className="row align-items-stretch">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="pricing h-100 text-center">
                  <span className="popularity">Best Value</span>
                  <h3>IPhone 14</h3>
                  <p>(128 gb)</p>
                  <ul className="list-unstyled">
                    <li>MRP: Rs. 80000 /-</li>
                    <li>Get discounts upto 20%</li>
                    <li>Effective Price: Rs. 64000 /-</li>
                  </ul>
                  <div className="price-cta">
                    <strong className="price">Rs. 5400/month</strong>
                    <p>for 12 months.</p>
                    <p>
                      <a href="#" className="btn btn-white">
                        Add Goal
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="pricing h-100 text-center popular">
                  <span className="popularity">Best Value</span>
                  <h3>Macbook Air M1</h3>
                  <p>(256 gb)</p>
                  <ul className="list-unstyled">
                    <li>MRP: Rs. 83000 /-</li>
                    <li>Get discounts upto 17%</li>
                    <li>Effective Price: Rs. 68800 /-</li>
                  </ul>
                  <div className="price-cta">
                    <strong className="price">Rs. 5750/month</strong>
                    <p>for 12 months.</p>
                    <p>
                      <a href="#" className="btn btn-white">
                        Add Goal
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="pricing h-100 text-center">
                  <span className="popularity">Best Value</span>
                  <h3>Sony Bravia</h3>
                  <p>(55 inch)</p>
                  <ul className="list-unstyled">
                    <li>MRP: Rs. 64000 /-</li>
                    <li>Get discounts upto 16%</li>
                    <li>Effective Price: Rs. 53000 /-</li>
                  </ul>
                  <div className="price-cta">
                    <strong className="price">Rs. 4450/month</strong>{" "}
                    <p>for 12 months.</p>
                    <p>
                      <a href="#" className="btn btn-white">
                        Add Goal
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* review */}
        <section className="section border-top border-bottom">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-4">
                <h2 className="section-heading">Review From Our Users</h2>
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-7">
                <div
                  className="testimonials-slider swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="review text-center">
                        <p className="stars">
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill muted"></span>
                        </p>
                        <h3>Excellent App!</h3>
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eius ea delectus pariatur, numquam aperiam
                            dolore nam optio dolorem facilis itaque voluptatum
                            recusandae deleniti minus animi, provident
                            voluptates consectetur maiores quos.
                          </p>
                        </blockquote>

                        <p className="review-user">
                          <img
                            src="assets/img/person_1.jpg"
                            alt="Image"
                            className="img-fluid rounded-circle mb-3"
                          />
                          <span className="d-block">
                            <span className="text-black">Jean Doe</span>,
                            &mdash; App User
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="review text-center">
                        <p className="stars">
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill muted"></span>
                        </p>
                        <h3>This App is easy to use!</h3>
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eius ea delectus pariatur, numquam aperiam
                            dolore nam optio dolorem facilis itaque voluptatum
                            recusandae deleniti minus animi, provident
                            voluptates consectetur maiores quos.
                          </p>
                        </blockquote>

                        <p className="review-user">
                          <img
                            src="assets/img/person_2.jpg"
                            alt="Image"
                            className="img-fluid rounded-circle mb-3"
                          />
                          <span className="d-block">
                            <span className="text-black">Johan Smith</span>,
                            &mdash; App User
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="review text-center">
                        <p className="stars">
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill"></span>
                          <span className="bi bi-star-fill muted"></span>
                        </p>
                        <h3>Awesome functionality!</h3>
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eius ea delectus pariatur, numquam aperiam
                            dolore nam optio dolorem facilis itaque voluptatum
                            recusandae deleniti minus animi, provident
                            voluptates consectetur maiores quos.
                          </p>
                        </blockquote>

                        <p className="review-user">
                          <img
                            src="assets/img/person_3.jpg"
                            alt="Image"
                            className="img-fluid rounded-circle mb-3"
                          />
                          <span className="d-block">
                            <span className="text-black">Jean Thunberg</span>,
                            &mdash; App User
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section cta-section">
          <div className="container">
            {/* <div className="row align-items-center">
      <div className="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
        <h2>Starts Publishing Your Apps</h2>
      </div>
      <div className="col-md-5 text-center text-md-end">
        <p><a href="#" className="btn d-inline-flex align-items-center"><i className="bx bxl-apple"></i><span>App store</span></a> <a href="#" className="btn d-inline-flex align-items-center"><i className="bx bxl-play-store"></i><span>Google play</span></a></p>
      </div>
    </div> */}



            {/* <!-- ======= Clients Section ======= --> */}
            <section id="clients" className="clients">
              <div className="container" data-aos="fade-up">
                <header className="section-header">
                  <h2>Collaborated Companies</h2>
                </header>

                <div className="clients-slider swiper-container">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img
                        src=".assets/img/clients/client-1.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="assets/img/clients/client-2.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="assets/img/clients/client-3.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="assets/img/clients/client-4.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="assets/img/clients/client-5.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="assets/img/clients/client-6.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="assets/img/clients/client-7.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="assets/img/clients/client-8.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
        </section>



        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </body>
    </>
  );
}

export default App;
