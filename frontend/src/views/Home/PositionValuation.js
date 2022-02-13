import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosMain from '../../services';
import { toast } from 'react-toastify';

const PriceDetails = props => {
    const [data, setData] = useState({});
    const [errValue, setErrValue] = useState();

    return (
        <React.Fragment>
            <div className="col-xxl-4 col-xl-4">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Position Valuation</h4>
                    </div>
                    <div className="card-body">
                        <ul className="balance-widget position-value">
                            <li>
                                <h5>Opening Cost</h5>
                                <div className="text-right">
                                    <h5>$0.0000</h5>
                                    <span>Original cost of all open positions.</span>
                                </div>
                            </li>
                            <li>
                                <h5>Current Valuation</h5>
                                <div className="text-right">
                                    <h5>$0.0000</h5>
                                    <span>Paper valuation of all open positions.</span>
                                </div>
                            </li>
                            <li>
                                <h5>Profit</h5>
                                <div className="text-right">
                                    <h5>$0.0000 (0,00%)</h5>
                                    <span>Paper profit of all open positions..</span>
                                </div>
                            </li>
                            <li>
                                <h5>Loss</h5>
                                <div className="text-right">
                                    <h5>$0.0000 (0,00%)</h5>
                                    <span>Paper loss of all open positions.</span>
                                </div>
                            </li>
                            <li>
                                <h5>Fees</h5>
                                <div className="text-right">
                                    <h5>$0.0000</h5>
                                    <span>Current Fee</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default PriceDetails;
