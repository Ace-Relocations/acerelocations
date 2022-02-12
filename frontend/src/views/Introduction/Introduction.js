import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import dashboard from '../../assets/images/dashboard.jpg';
import dashboard1 from '../../assets/images/dashboard1.jpg';
import dashboard2 from '../../assets/images/dashboard2.jpg';

const Introduction = props => {
    const [data, setData] = useState({});
    const [errValue, setErrValue] = useState();

    return (
        <React.Fragment>
            <br/>
            <br/>
            <div className="header landing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar">
                                <div className="brand-logo">
                                    <a href="index.html">
                                    <span><img src={logo} alt="" height="100px" width="100px" /></span>
                                    <span align="left">Ace Relocations</span>
                                    </a>
                                </div>
                                <Link to="/login" className="btn btn-success">Sign in</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            </br>
            <br>
            </br>
            <div className="intro" id="intro" data-scroll-index="0">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-md-6">
                            <div className="intro-content pb-5">
                                <h1>Ace Relocations - Logistics Software Management System</h1>
                                <p>With an experience of more than 14 years in packing and moving industry, we have successfully helped 
                                    more than 10,000+ clients to relocate across various cities in India. Best packers and movers 
                                    company in India. </p>
                                <div className="intro-btn">
                                <Link to="/login" className="btn btn-primary">Get Started</Link>
                                    <a href="index.html" className="btn btn-outline-primary">Browse Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6 py-md-5">
                            <div className="intro-demo_img">
                                {/* <img src={dashboard} alt="" className="img-fluid"/> */}
                                <img src={dashboard1} alt="" className="img-fluid"/>
                                {/* <img src={dashboard2} alt="" className="img-fluid"/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
};

export default Introduction;
