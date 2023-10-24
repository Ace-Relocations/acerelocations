import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axiosMain from '../../services';
import { toast } from 'react-toastify';

// import am4core from "@amcharts/amcharts4/core";
// import am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);

const Balance = props => {
    const [data, setData] = useState({});
    const [errValue, setErrValue] = useState();

    // useLayoutEffect(() => {
    //     let chart = am4core.create("chartdiv1", am4charts.PieChart);

    //     chart.data = [{
    //         "token": "Completed",
    //         "amount": 500
    //     }, {
    //         "token": "Created",
    //         "amount": 12
    //     }, {
    //         "token": "In Transit",
    //         "amount": 5
    //     }, {
    //         "token": "Warehouse",
    //         "amount": 7
    //     }];
    //     var pieSeries = chart.series.push(new am4charts.PieSeries());
    //     pieSeries.dataFields.value = "amount";
    //     pieSeries.dataFields.category = "token";
    //     // return () => {
    //     //     chart.dispose();
    //     // };
    // }, []);


    return (
        <React.Fragment>

            <div className="col-xxl-6">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Statistics</h4>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-xxl-12 col-xl-6 col-lg-6">
                                <div className="balance-chart">
                                    <div id="chartdiv1" ></div>
                                    <h4>Total Jobs = 524</h4>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6">

                                {/* <ul className="balance-widget">
                                    <li>
                                        <div className="icon-title">
                                            <i className="cc BTC"></i>
                                            <span>Bitcoin</span>
                                        </div>
                                        <div className="text-right">
                                            <h5>0.000242 BTC</h5>
                                            <span>0.125 USD</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-title">
                                            <i className="cc RBIES-alt"></i>
                                            <span>Acerelocations</span>
                                        </div>
                                        <div className="text-right">
                                            <h5>0.000242 USDT</h5>
                                            <span>0.125 USD</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-title">
                                            <i className="cc XTZ"></i>
                                            <span>Tezos</span>
                                        </div>
                                        <div className="text-right">
                                            <h5>0.000242 XTZ</h5>
                                            <span>0.125 USD</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-title">
                                            <i className="cc XMR"></i>
                                            <span>Monero</span>
                                        </div>
                                        <div className="text-right">
                                            <h5>0.000242 XMR</h5>
                                            <span>0.125 USD</span>
                                        </div>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default Balance;
