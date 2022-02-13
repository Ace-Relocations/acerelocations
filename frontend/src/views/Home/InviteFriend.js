import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosMain from '../../services';
import { toast } from 'react-toastify';

const InviteFriend = props => {
    const [data, setData] = useState({});
    const [errValue, setErrValue] = useState();

    return (
        <div className="row">

            <div className="col-xxl-6 col-xl-6 col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="invite-content">
                            <h4>Invite a friend and get $30</h4>
                            <p>You will receive up to $30 when they：
                                1.Create their first job<br /><a href="#">Learn more</a>
                            </p>
                            <div className="copy-link">
                                <form action="#">
                                    <div className="input-group">
                                        <input type="text" className="form-control"
                                            value="https://www.Acerelocations.io/join/12345" />
                                        <span className="input-group-text">Copy</span>
                                    </div>
                                </form>
                            </div>

                            <div className="social-share-link">
                                <a href="https://www.facebook.com/AceRelocationAhmedabad/"><span><i className="icofont-facebook"></i></span></a>
                                <a href="https://wa.me/9825219378?text=Need Help With the App"><span><i className="icofont-whatsapp"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="invite-content">
                            <h4>Create your first job now</h4>
                            <p>Earn free bitcoins in rewards by completing a learning mission daily or
                        inviting friends to Acerelocations. <a href="/create-job">Learn more</a>
                            </p>
                            <a href="/create-job" className="btn btn-primary">Create Job</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InviteFriend;
