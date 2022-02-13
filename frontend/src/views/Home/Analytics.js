import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosMain from "../../services";
import { toast } from "react-toastify";
import CandleGraph from "../Graphs/CandleGraph";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { withRouter } from "react-router";

const selectDurationOptions = [
    { label: '1m', value: '1m' },
    { label: '3m', value: '3m' },
    { label: '5m', value: '5m' },
    { label: '15m', value: '15m' },
    { label: '30m', value: '30m' },
    { label: '1h', value: '1h' },
    { label: '2h', value: '2h' },
    { label: '4h', value: '4h' },
    { label: '6h', value: '6h' },
    { label: '8h', value: '8h' },
    { label: '12h', value: '12h' },
    { label: '1d', value: '1d' },
    { label: '3d', value: '3d' },
    { label: '1w', value: '1w' },
    { label: '1M', value: '1M' }
];

const Analytics = (props) => {
  const [data, setData] = useState([]);
  const [selectOptions, setSelectionOptions] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState([]);
  const [pair, setPair] = useState();
  const [symbol, setSymbol] = useState();
  const [lastPrice, setLastPrice] = useState();
  const [errValue, setErrValue] = useState();
  const [volume, setVolume] = useState();
  const [open, setOpen] = useState();

  useEffect(() => {
    setPair('BTCUSDT') 
    setSelectedDuration("1h");
    getPairs();
  }, []);

  const getPairs = () => {
    axiosMain
      .get("/market/price")
      .then((response) => {
        if (response.status === 200) {
          // for (let j in response.data) {
          //     console.log("YAY", Object.keys(response.data)[j])
          // }
          let dataArr = [];
          Object.keys(response.data).forEach((prop) => {
            dataArr.push({
              label: prop,
              value: prop,
            });
          });
          setSelectionOptions(dataArr);
        }
      })
      .catch((error) => {
        console.error("Error", error);
        setErrValue("The Crypto Data Feetch Unsuccessful");
      });
  };

  const onPairSelect = () => {
    axiosMain
      .post("/market/candleGraph", {
        pair: pair,
        timeInterval: selectedDuration
      })
      .then((response) => {
        if (response.status === 200) {
          let dataArr = [];
          let data = response.data;
          // Object.keys(data).map(({ graph }, index) => {
          //     Object.keys(graph).map((ww) => {
          //         console.log("DATA", ww);
          //     })
          // })

          //   for (let i = 0; i < 50; i++) {
          Object.values(data.graph).forEach((i) => {
            let obj = {};
            obj.x = new Date(i[0]);
            obj.y = [Number(i[1]), Number(i[2]), Number(i[3]), Number(i[4])];
            dataArr.push(obj);
          });
          //   }

          setData(dataArr);
          setSymbol(data.symbol);
          setLastPrice(data.close);
          setOpen(data.open);
          setVolume(data.volume);
          console.log("Response", dataArr);
        }
      })
      .catch((error) => {
        console.error("Error", error);
        setErrValue("The Crypto Data Feetch Unsuccessful");
      });
  };

  return (
    <React.Fragment>
      <div className="col-xxl-8 col-xl-8">
        <div className="card home-chart">
          <div className="card-header">
            <h4 className="card-title home-chart">Analytics</h4>
            {errValue? <p>{errValue}</p> : null}

            <CustomDropdown
              className="form-select"
              name="report-type"
              id="report-select"
              options={selectOptions}
              defaultLabel="Choose Ticker"
              // value={"BTCUSDT" || "N/A"}
              onChangeOption={(selected) => { setPair(selected); onPairSelect(); }}
            />
            <CustomDropdown
              className="form-select"
              name="report-type"
              id="report-select"
              options={selectDurationOptions}
              defaultLabel="Choose Duration"
              // value={"BTCUSDT" || "N/A"}
              onChangeOption={(selected) => { setSelectedDuration(selected); onPairSelect(); }}
            />
          </div>
          <div className="card-body">
            <div className=" home-chart-height">
              <div id="chartx"></div>
              <CandleGraph graphData={data} />
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="chart-price-value">
                    <span>24hr Volume</span>
                    <h5>{volume}</h5>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="chart-price-value">
                    <span>Open</span>
                    <h5>{open}</h5>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="chart-price-value">
                    <span>Symbol</span>
                    <h5>{symbol}</h5>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="chart-price-value">
                    <span>Last Price</span>
                    <h5>{lastPrice}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Analytics);
