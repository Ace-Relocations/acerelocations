import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosMain from '../../services';
import { toast } from 'react-toastify';
import profileImage from '../../assets/images/profile/2.png';

const VerificationAlerts = props => {
    const [data, setData] = useState({});
    const [errValue, setErrValue] = useState();

    const dp = localStorage.getItem('dp');

    
    return (
        <React.Fragment>
            <div className="col-xxl-3 col-xl-6 col-lg-6">
                <div className="card welcome-profile">
                    <div className="card-body">
                        <img src={dp} alt="" />
                        <h4>Welcome, {props.username}!</h4>
                        <p>Looks like you are not verified yet. Verify yourself to use the full potential of
                                    Acerelocations.</p>

                        <ul>
                            <li>
                                <a href="#">
                                    <span className="verified"><i className="icofont-check-alt"></i></span>
                                    Verify account
                                        </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="not-verified"><i className="icofont-close-line"></i></span>
                                    Two-factor authentication (2FA)
                                        </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="not-verified"><i className="icofont-close-line"></i></span>
                                    Deposit money
                                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default VerificationAlerts;
