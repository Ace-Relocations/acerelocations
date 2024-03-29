import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import logo from '../../assets/images/logo.png';

import {
  USERNAME_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_VALID,
} from '../../constants/errorConstants';

import { loginRequest } from '../../actions';
import { Spinner } from '../../views';

const Login = props => {
  const history = useHistory();

  const [usernameValue, setUsernameValue] = useState({});
  const [passwordValue, setPasswordValue] = useState({});
  const [errValue, setErrValue] = useState(null);
  const stats = useSelector((state) => state.Dashboard.dashboardStats);
  const error = useSelector((state) => state.Auth.errorMessage);

  const handleValidation = () => {
    let errors = null;
    let formIsValid = true;

    //Email
    if (!usernameValue) {
      formIsValid = false;
      errors = "Username Cannot be empty";
    }

    // if (emailValue !== "undefined") {
    //   let lastAtPos = emailValue.lastIndexOf('@');
    //   let lastDotPos = emailValue.lastIndexOf('.');

    //   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && emailValue.indexOf('@@') == -1 && lastDotPos > 2 && (emailValue.length - lastDotPos) > 2)) {
    //     formIsValid = false;
    //     errors = "Email is not valid";
    //   }
    // }
    //Password
    if (!passwordValue) {
      formIsValid = false;
      errors = "Password Cannot be empty";
    }

    if (passwordValue && passwordValue.length < 6) {
      formIsValid = false;
      errors = "Password Cannot be less than 6 characters";
    }
    setErrValue(errors);

    return formIsValid;
  }

  const dispatch = useDispatch();

  const submitBtnHandler = () => {
    if (handleValidation()) {
      dispatch(loginRequest({ username: usernameValue, password: passwordValue }));
    } else {
      console.log("Error Value", errValue)
    }
    // props.history.push({
    //   pathname: `/dashboard`
    // }); 

  };

  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };
  // const history = useHistory();

  return (
    <div id='main-wrapper'>
      <div className='authincation section-padding'>
        <div className='container h-100'>
          <div className='row justify-content-center h-100 align-items-center'>
            <div className='col-xl-5 col-md-6'>
              <div className='mini-logo text-center my-4'>
                <a href='./intro.html' />
                <img src={logo} alt='' height="75px" width="120px" />
                <h4 className='card-title mt-3'>Sign in to Ace Relocations</h4>
              </div>
              <div className='auth-form card'>
                <div className='card-body'>
                  <div className='col-12'>
                  {error &&
                          <p style={{ color: "red" }}>{error}</p>
                  }
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter your username'
                      name='username'
                      onChange={(e) => setUsernameValue(e.target.value)}
                    />
                  </div>
                  <div className='col-12'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Password'
                      name='password'
                      onChange={(e) => setPasswordValue(e.target.value)}
                      required
                    />
                  </div>
                  <div className='col-6'>
                    <div className='form-check form-switch'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        id='flexSwitchCheckDefault'
                        onChange={(e) => console.log("Hi", e.target.value)}
                      />
                      <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
                        Remember me
                        </label>
                      {
                        errValue ?
                          <p style={{ color: "red" }}>{errValue}</p>
                          : null
                      }
                    </div>
                  </div>
                  <div className='col-6'>
                    <Link to='/reset-password'>Forgot Password?</Link>
                  </div>
                  <div className='text-center'>
                    <button
                      type='submit'
                      className='btn btn-primary btn-block'
                      onClick={() => submitBtnHandler()}
                    >
                      Sign in
                      </button>
                  </div>
                  <p className='mt-3 mb-0'>
                    Don't have an account?{' '}
                    <Link
                      className='text-primary'
                      to='/signup'
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
              {/* <div className='privacy-link'>
                <Link
                  to='/signup'
                >
                  Have an issue with 2-factor authentication?
                </Link>
                <br />
                <Link
                  to='/signup'>
                  Privacy Policy
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
