import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axiosMain from '../../services';
const VerifiedMessage = props => {
    const { id, email } = useParams();

    const [verified, setVerified] = useState(false);

    useEffect(() => {
        axiosMain
        .post('/auth/verify?id=' + id + '&email=' + email)
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
            <div className="mini-logo text-center my-4">
                <a href="./intro.html"><img src="./images/logo.png" alt="" /></a>
                {verified? <h4 className="card-title mt-3">Your Email has been verified</h4>
                :
                <h4 className="card-title mt-3">Your Email has been verified</h4>}

            </div>
        </div>
    );
}
export default VerifiedMessage;