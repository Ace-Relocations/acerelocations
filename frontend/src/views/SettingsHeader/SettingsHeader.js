import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosMain from '../../services';
import { toast } from 'react-toastify';

const SettingsHeader = props => {
    return (

        <div className="card-header">
            <div className="settings-menu">
                <Link 
                    to="/profile"
                >
                    Profile
                </Link>
                <Link 
                    to="/payment-method"
                > 
                    Payment Method
                </Link>
                <a href="settings-security.html">Security</a>
                <a href="settings-activity.html">Activity</a>
                <a href="settings-privacy.html">Privacy</a>
                <a href="settings-payment-method.html">Application</a>
                <a href="settings-api.html">API</a>
                <a href="settings-fees.html">Fees</a>
            </div>
        </div>

    )
};

export default SettingsHeader;
