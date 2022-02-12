import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import profileImage from '../../assets/images/profile/2.png';
import { logoutRequest } from '../../actions';
import logo from '../../assets/images/logo.png';
// import axiosMain from '../../services;
import { toast } from 'react-toastify';

const Header = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    const [profileDropdown, setProfileDropdown] = useState(false);
    const [notificationDropdown, setNotificationDropdown] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector(state => state);

    const dp = localStorage.getItem('dp');
    const email = localStorage.getItem('email');

    const logout = () => {
        localStorage.clear();
        dispatch(logoutRequest())
        window.location.href = '/';
    };

    return (
        <React.Fragment>
            <div className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-12'>
                            <div className='header-content'>
                                <div className='header-right'>
                                    <div className='brand-logo'>
                                        <a href='index.html'>
                                            <span><img src={logo} alt=""/></span>
                                        </a>
                                    </div>
                                    <div className='search'>
                                        <form action='#'>
                                            <div className='input-group'>
                                                <input type='text' className='form-control' placeholder='Search Here' />
                                                <span className='input-group-text'>
                                                    <i className='icofont-search'></i>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className='header-right'>
                                    <div className='dark-light-toggle' onClick={() => console.log('Toggle Clicked')}>
                                        <span className='dark'>
                                            <i className='icofont-moon'></i>
                                        </span>
                                        <span className='light'>
                                            <i className='icofont-sun-alt'></i>
                                        </span>
                                    </div>
                                    <div className='notification dropdown'>
                                        <div className='notify-bell' onClick={() => notificationDropdown ? setNotificationDropdown(false) : setNotificationDropdown(true)}>
                                            <span>
                                                <i className='icofont-alarm'></i>
                                            </span>
                                        </div>
                                        {notificationDropdown ?
                                            <div className='dropdown-menu dropdown-menu-right notification-list'>
                                                <h4>Announcements</h4>
                                                <div className='lists'>
                                                    <a href='#' className=''>
                                                        <div className='d-flex align-items-center'>
                                                            <span className='mr-3 icon success'>
                                                                <i className='icofont-check'></i>
                                                            </span>
                                                            <div>
                                                                <p>Account created successfully</p>
                                                                <span>2020-11-04 12:00:23</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href='#' className=''>
                                                        <div className='d-flex align-items-center'>
                                                            <span className='mr-3 icon fail'>
                                                                <i className='icofont-close'></i>
                                                            </span>
                                                            <div>
                                                                <p>2FA verification failed</p>
                                                                <span>2020-11-04 12:00:23</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href='#' className=''>
                                                        <div className='d-flex align-items-center'>
                                                            <span className='mr-3 icon success'>
                                                                <i className='icofont-check'></i>
                                                            </span>
                                                            <div>
                                                                <p>Device confirmation completed</p>
                                                                <span>2020-11-04 12:00:23</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href='#' className=''>
                                                        <div className='d-flex align-items-center'>
                                                            <span className='mr-3 icon pending'>
                                                                <i className='icofont-warning'></i>
                                                            </span>
                                                            <div>
                                                                <p>Phone verification pending</p>
                                                                <span>2020-11-04 12:00:23</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href='./settings-activity.html'>
                                                        More <i className='icofont-simple-right'></i>
                                                    </a>
                                                </div>
                                            </div> : null}
                                    </div>

                                    <div className='profile_log dropdown'>
                                        <div className='user' onClick={() => profileDropdown ? setProfileDropdown(false) : setProfileDropdown(true)}>
                                            {/* <span className='thumb'>
                                                <img src={dp} alt='profile' height="42px" width="50px" />
                                            </span> */}
                                            <span>
                                                <i class="icofont-user-suited"></i>
                                            </span>
                                            <span className='arrow'>
                                                <i className='icofont-angle-down'></i>
                                            </span>
                                        </div>
                                        {profileDropdown ?
                                            <div className='dropdown-menu dropdown-menu-right'>
                                                <div className='user-email'>
                                                    <div className='user'>
                                                        <span className='thumb'>
                                                            <img src={dp} alt='profile' height="42px" width="50px" />
                                                        </span>
                                                        <div className='user-info'>
                                                            <span>{email}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link
                                                    to='/profile'
                                                    className='dropdown-item'
                                                >
                                                    <i className='icofont-ui-user'></i>Profile
                                                 </Link>
                                                <Link
                                                    to='/settings-profile'
                                                    className='dropdown-item'
                                                >
                                                    <i className='icofont-ui-settings'></i>Settings
                                                 </Link>
                                                {/* <Link
                                                    to='/settings-activity'
                                                    className='dropdown-item'
                                                >
                                                    <i className='icofont-history'></i>Activity
                                                 </Link> */}
                                                <Link
                                                    to='/account-locked'
                                                    className='dropdown-item'
                                                >
                                                    <i className='icofont-lock'></i>Lock
                                                 </Link>

                                                <a className='dropdown-item logout' onClick={() => logout()}>
                                                    <i className='icofont-logout'></i> Logout
                                                </a>
                                            </div> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                  
        </React.Fragment >
    );
};

export default Header;
