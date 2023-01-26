import { React } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

//  import SetGoal from "./components/SetGoal";

const Goals = () => {

    const id = "ayush";
    const navigate=useNavigate();
    function gotoGoal() {
        navigate("/SetGoal", { state: {id: id} })
    }
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="goalmain">

                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light">Filer Price</div>
                    <div className="list-group list-group-flush">
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Mobile</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">TV</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
                    </div>
                </div>
                <div>
                    <section className="section">
                        <div className="container" data-aos="fade-up">
                            <div className="row justify-content-center text-center">
                                <div className="col-md-7 mb-5">
                                    <h2 className="section-heading">Products</h2>

                                </div>
                            </div>
                            <div className="row align-items-stretch">
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <div className="pricing h-100 text-center">
                                        <span className="popularity">Best Value</span>
                                        <h3>{id}</h3>
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
                                                <NavLink className="" to="/SetGoal" onClick={gotoGoal}>
                                                    Add to Goal
                                                </NavLink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <div className="pricing h-100 text-center popular">
                                        <span className="popularity">Best Value</span>
                                        <h3>Macbook Air M1</h3>
                                        <p>(25y6 gb)</p>
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

                </div>
            </div>
        </div>
    )
}

export default Goals
