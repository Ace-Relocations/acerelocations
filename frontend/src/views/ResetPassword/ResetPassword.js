import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axiosMain from '../../services';

const ResetPassword = props => { 

  const { id, email } = useParams();

    const [verified, setVerified] = useState(false);

    useEffect(() => {
        axiosMain
        .post('/auth/forgot')
        .then(response => {
          if (response.status === 200) {
            setVerified(true);
          }
        })
        .catch(error => {
          console.error('Error', error);
        });
    }, []);

  return (
  
  <div id="main-wrapper">
    <div className="authincation section-padding">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-4 col-md-5">
            <div className="mini-logo text-center my-3">
              <a href="./intro.html"><img src="./images/logo.png" alt="" /></a>
              <h4 className="card-title mt-3">Reset Password</h4>
            </div>
            <div className="auth-form card">
              <div className="card-body">
                <form action="verify-email.html" className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder="***********" />
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                  </div>
                </form>
                <div className="new-account mt-3">
                  {verified?
                  <p>The OTP has been sent</p>:
                  <p></p>}
                  <p>Din't get a code? <a className="text-primary" href="otp-1.html">Resend</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ResetPassword;
