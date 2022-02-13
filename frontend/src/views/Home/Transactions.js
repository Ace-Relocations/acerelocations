import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosMain from '../../services';
import { toast } from 'react-toastify';

const PriceDetails = props => {
    const [data, setData] = useState({});
    const [errValue, setErrValue] = useState();

    return (
        <React.Fragment>
            <div className="col-xxl-8 col-xl-8">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Transaction</h4>

                    </div>
                    <div className="card-body">
                        <div className="table-responsive transaction-table">
                            <table className="table table-striped responsive-table">
                                <thead>
                                    <tr>
                                        <th>Ledger ID</th>
                                        <th>Date</th>
                                        <th>Type</th>
                                        <th>Currency</th>
                                        <th>Amount</th>
                                        <th>Fee</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>523640</td>
                                        <td>January 15</td>
                                        <td>
                                            <span className="danger-arrow"><i className="icofont-arrow-down"></i>
                                                Sell</span>
                                        </td>
                                        <td className="coin-name">
                                            <i className="cc BTC"></i> Bitcoin
                                                </td>
                                        <td className="text-danger">-0.000242 BTC</td>
                                        <td>0.02%</td>
                                        <td><strong>0.25484 BTC</strong></td>
                                    </tr>
                                    <tr>
                                        <td>523640</td>
                                        <td>January 15</td>
                                        <td><span className="success-arrow"><i
                                            className="icofont-arrow-up"></i>Buy</span>
                                        </td>
                                        <td className="coin-name">
                                            <i className="cc RBIES-alt"></i> Acerelocations
                                                </td>
                                        <td className="text-success">-0.000242 BTC</td>
                                        <td>0.02%</td>
                                        <td><strong> 0.25484 LTC</strong></td>
                                    </tr>
                                    <tr>
                                        <td>523640</td>
                                        <td>January 15</td>
                                        <td><span className="success-arrow"><i
                                            className="icofont-arrow-up"></i>Buy</span>
                                        </td>
                                        <td className="coin-name">
                                            <i className="cc XRP"></i> Ripple
                                                </td>
                                        <td className="text-success">-0.000242 BTC</td>
                                        <td>0.02%</td>
                                        <td><strong> 0.25484 LTC</strong></td>
                                    </tr>
                                    <tr>
                                        <td>523640</td>
                                        <td>January 15</td>
                                        <td><span className="success-arrow"><i
                                            className="icofont-arrow-up"></i>Buy</span>
                                        </td>
                                        <td className="coin-name">
                                            <i className="cc DASH"></i> Dash
                                                </td>
                                        <td className="text-success">-0.000242 BTC</td>
                                        <td>0.02%</td>
                                        <td><strong> 0.25484 LTC</strong></td>
                                    </tr>
                                    <tr>
                                        <td>523640</td>
                                        <td>January 15</td>
                                        <td><span className="success-arrow"><i
                                            className="icofont-arrow-up"></i>Buy</span>
                                        </td>
                                        <td className="coin-name">
                                            <i className="cc LTC"></i> Litecoin
                                                </td>
                                        <td className="text-success">-0.000242 BTC</td>
                                        <td>0.02%</td>
                                        <td><strong> 0.25484 LTC</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default PriceDetails;
