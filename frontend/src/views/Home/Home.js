import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import profileImage from '../../assets/images/profile/2.png';
import graph from '../../assets/images/graph.png';
import InviteFriend from '../Home/InviteFriend';
import VerificationAlerts from '../Home/VerificationAlerts';
import QuickTrade from '../Home/QuickTrade';
import Balance from '../Home/Balance';
import Analytics from '../Home/Analytics';
// import PositionValuation from '../Home/PositionValuation';
// import Transactions from '../Home/Transactions';
import TradeBalances from '../Home/TradeBalances';
import { withRouter } from "react-router";
import { dashbordStatsRequest } from '../../actions';

import axiosMain from '../../services';
import { toast } from 'react-toastify';

// am4core.useTheme(am4themes_animated);

const Home = props => {
  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem('userData'));
  const [data, setData] = useState({});

  const [errValue, setErrValue] = useState();

  const stats = useSelector((state) => state.Dashboard.dashboardStats);
  const { loader } = useSelector((state) => state.Loader);

  useEffect(() => {
    dispatch(dashbordStatsRequest());
  }, []);
  console.log("Stats:", stats)

  // useEffect(() => {
  //   getUserProfile();
  // }, []);

  // const getUserProfile = () => {
  //   axiosMain
  //     .get('/market/price')
  //     .then(response => {
  //       if (response.status === 200) {
  //         setData(response.data);
  //         console.log("Response:", response.data);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error', error);
  //       setErrValue("The Crypto Data Feetch Unsuccessful");
  //     });
  // };

  // useLayoutEffect(() => {

  // }, []);

  return (
    <React.Fragment>
      <div className="content-body">
        <div className="container">
          <div className="row">
            <InviteFriend />
            { stats.length !== 0?
            Object.keys(stats).map((key) => {
              console.log("Key", key)
              console.log("Value", key)
              return(
            <div className="col-xxl-4 col-xl-4 col-lg-6">
                <div className="price-widget bg-usdt">
                  <a href="price-details.html">
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc RBIES-alt"></i>
                        <span>{key}</span>
                      </div>
                      <h5>{stats[key] ? stats[key] : 0}</h5>
                    </div>
                    <div id="chart"></div>
                  </a>
                </div>
              </div>
              )
            }
            )
            : null
            }
            < VerificationAlerts username={userData.username} />
            {/* < QuickTrade priceData={data} buttonV={'Exchange Now'}/> */}
            < Balance />
            < Analytics />
            {/* < TradeBalances /> */}
          </div>
        </div>
      </div>
    </React.Fragment >
  );
};

export default withRouter(Home);
