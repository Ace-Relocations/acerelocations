import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axiosMain from '../../services';
import { toast } from 'react-toastify';
import { date } from 'yup';
import { withRouter } from 'react-router';

import profile from '../../assets/images/profile/2.png';
import android from '../../assets/images/android.svg';
import apple from '../../assets/images/apple.svg';

const Profile = props => {
    const [data, setData] = useState({});
    const [errValue, setErrValue] = useState();
    const dp = localStorage.getItem('dp');

    useEffect(() => {
        getUserProfile();
    }, data);

    const getUserProfile = () => {
        axiosMain
            .get('/user/view')
            .then(response => {
                if (response.status === 200) {
                    setData(response.data);
                    console.log("Response:", response.data);
                    toast.success(`Sign Up Successful`, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(error => {
                console.error('Error', error);
                setErrValue("This User profile fetch failed");
            });
    };

    const handleEdit = () => {
        props.history.push({
            pathname: `/settings-profile`,
            state: {
                profileData: data,
            },
        });
    }

    return (
        <React.Fragment>
            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="card welcome-profile">
                                <div className="card-body">
                                    <img src={dp} alt="" />
                                    <h4>Welcome, {data.username}!</h4>
                                    <p>Looks like you are not verified yet. Verify yourself to use the full potential of
                                    Rhodium Exchange.</p>
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Download App</h4>
                                </div>
                                <div className="card-body">
                                    <div className="app-link">
                                        <h5>Get Verified On Our Mobile App</h5>
                                        <p>Verifying your identity on our mobile app more secure, faster, and reliable.</p>
                                        <a href="#" className="btn btn-primary">
                                            <img src={android} alt="" />
                                        </a>
                                        <br />
                                        <div className="mt-3"></div>
                                        <a href="#" className="btn btn-primary">
                                            <img src={apple} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Information </h4>
                                    <button
                                        type='submit'
                                        className='btn btn-primary'
                                        onClick={() => handleEdit()}
                                    >
                                        Edit
                                    </button>
                                    {/* <Link to="/settings-profile" className="btn btn-primary">Edit</Link> */}
                                </div>
                                <div className="card-body">
                                    <form className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>USER Name</span>
                                                <h4>{data.username}</h4>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>EMAIL ADDRESS</span>
                                                <h4>{data.email}</h4>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>COUNTRY OF RESIDENCE</span>
                                                <h4>{data.country}</h4>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>JOINED SINCE</span>
                                                <h4>{date.createdAt}</h4>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                            <div className="user-info">
                                                <span>Contact</span>
                                                <h4>{data.number}</h4>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-8 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">VERIFY & UPGRADE </h4>
                                </div>
                                <div className="card-body">
                                    <h5>Account Status : <span className="text-warning">Pending <i
                                        className="icofont-warning"></i></span> </h5>
                                    <p>Your account is unverified.
                                </p>
                                    <a href="#" className="btn btn-primary"> Get Verified</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Earn 30% Commission </h4>
                                </div>
                                <div className="card-body">
                                    <p>Refer your friends and earn 30% of their trading fees.</p>
                                    <a href="#" className="btn btn-primary"> Referral Program</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}

export default withRouter(Profile);
