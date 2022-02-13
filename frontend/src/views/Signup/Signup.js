import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosMain from '../../services';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router';

const Signup = props => {
  const [data, setData] = useState([]);
  const [emailValue, setEmailValue] = useState({});
  const [passwordValue, setPasswordValue] = useState();
  const [usernameValue, setUsernameValue] = useState();
  const [errValue, setErrValue] = useState();

  const handleValidation = () => {
    let errors;
    let formIsValid = true;

    //Name
    if (!usernameValue) {
      formIsValid = false;
      errors = "Username Cannot be empty";
    }

    //Email
    if (!emailValue) {
      formIsValid = false;
      errors = "Email Cannot be empty";
    }

    if (emailValue !== "undefined") {
      let lastAtPos = emailValue.lastIndexOf('@');
      let lastDotPos = emailValue.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && emailValue.indexOf('@@') == -1 && lastDotPos > 2 && (emailValue.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors = "Email is not valid";
      }
    }
    //Password
    if (!passwordValue) {
      formIsValid = false;
      errors = "Password Cannot be empty";
    }

    if (passwordValue && passwordValue.length < 8) {
      formIsValid = false;
      errors = "Password Cannot be less than 8 digits";
    }
    setErrValue(errors);

    return formIsValid;
  }

  const handleSubmit = () => {
    if (handleValidation()) {
      signUpAPI();
    } else {
      console.log("Error Value", errValue)
    }
  };

  const signUpAPI = () => {
    axiosMain
      .post('/auth/signup', {
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
        roles: ["admin", "moderator"]
      })
      .then(response => {
        if (response.status === 200) {
          setData(response.data.data);
          toast.success(`Sign Up Successful`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          props.history.push({
            pathname: `/verify-email`,
            state: {
              email: emailValue,
            },
          });
        }
      })
      .catch(error => {
        console.error('Error', error);
        setErrValue("This Email is already registered on the platform");
      });

    props.history.push({
      pathname: `/verify-email`,
      state: {
        email: emailValue,
        username: usernameValue,
        password: passwordValue,
        roles: ["admin", "moderator"],
      },
    });

  };

  return (
    <div id='main-wrapper'>
      <div className='authincation section-padding'>
        <div className='container h-100'>
          <div className='row justify-content-center h-100 align-items-center'>
            <div className='col-xl-5 col-md-6'>
              <div className='mini-logo text-center my-4'>
                <a href='./intro.html'>
                  <img src='./images/logo.png' alt='' />
                </a>
                <h4 className='card-title mt-3'>Create your account</h4>
              </div>
              <div className='auth-form card'>
                <div className='card-body'>
                  <div className='col-12'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      name='name'
                      onChange={(e) => setUsernameValue(e.target.value)}
                    />
                  </div>
                  <div className='col-12'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='hello@example.com'
                      name='email'
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                  </div>
                  <div className='col-12'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Password'
                      name='password'
                      onChange={(e) => setPasswordValue(e.target.value)}
                    />
                  </div>
                  <div className='col-12'>
                    <div className='form-check form-switch'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        id='flexSwitchCheckDefault'
                      />
                      <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
                        I certify that I am 18 years of age or older, and agree to the{' '}
                        <a href='#' className='text-primary'>
                          User Agreement
                        </a>{' '}
                        and{' '}
                        <a href='#' className='text-primary'>
                          Privacy Policy
                        </a>
                        .
                      </label>
                      {
                        errValue ?
                          <p style={{ color: "red" }}>{errValue}</p>
                          : null
                      }
                    </div>
                  </div>

                  <div className='text-center'>
                    <button
                      type='submit'
                      className='btn btn-primary btn-block'
                      onClick={() => handleSubmit()}
                    >
                      Create account
                    </button>
                  </div>
                  <div className='text-center'>
                    <p className='mt-3 mb-0'>
                      {' '}
                      <a className='text-primary' href='/login'>
                        Sign in
                    </a>{' '}
                      to your account
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(Signup);
