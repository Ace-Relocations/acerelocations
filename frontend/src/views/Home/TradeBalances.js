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
                        <h4 className="card-title">Trade Balances</h4>
                    </div>
                    <div className="card-body">
                        <ul className="balance-widget trade-balance">
                            <li>
                                <h5>Trade Balance</h5>
                                <div className="text-right">
                                    <h5>$0.0000</h5>
                                    <span>Total margin currency balance.</span>
                                </div>
                            </li>
                            <li>
                                <h5>Equity</h5>
                                <div className="text-right">
                                    <h5>$0.0000</h5>
                                    <span>Trade balance combined with unrealized profit/loss</span>
                                </div>
                            </li>
                            <li>
                                <h5>Used Margin</h5>
                                <div className="text-right">
                                    <h5>$0.0000</h5>
                                    <span>Total margin amount used in open positions.</span>
                                </div>
                            </li>
                            <li>
                                <h5>Free Margin</h5>
                                <div className="text-right">
                                    <h5>$0.0000</h5>
                                    <span>Usable margin balance. Equal to equity minus.</span>
                                </div>
                            </li>
                            <li>
                                <h5>Margin Level</h5>
                                <div className="text-right">
                                    <h5>$0.0000</h5>
                                    <span>Percentage ratio of equity to used margin.</span>
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
