import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosMain from '../../services';
import { toast } from 'react-toastify';
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import axios from 'axios';


const selectCurrOptions = [
    { label: 'USD', value: 'USD' },
    { label: 'INR', value: 'INR' },
    { label: 'AED', value: 'AED' }
];

const selectCryptoOptions = [
    { label: 'BTC', value: 'BTC' },
    { label: 'ETH', value: 'ETH' },
    { label: 'ADA', value: 'ADA' },
    { label: 'LTC', value: 'LTC' },
    { label: 'USDT', value: 'USDT' }
];


const QuickTrade = (props) => {
    const [data, setData] = useState({});
    const [currency, setCurrency] = useState();
    const [crypto, setCrypto] = useState({});
    const [currencyAmt, setCurrencyAmt] = useState();
    const [cryptoAmt, setCryptoAmt] = useState();

    const [errValue, setErrValue] = useState();

    useEffect(() => {
        setData(props.priceData);
        setCurrency("AED");
        setCrypto("BTC");
        console.log("In Quick Trade", props.priceData);
      }, []);

      const conversionHandler = (amount, currencyV) => {

        console.log("currency", amount);
            if(currencyV == "USD") {
                const rand = crypto + "USDT";

                setCryptoAmt(amount/props.priceData[rand]);

            } else if(currencyV == "AED")  {
             axios
              .get("https://free.currconv.com/api/v7/convert?q=USD_AED&compact=ultra&apiKey=a70e41243fad01998475")
              .then((response) => {
                if (response.status === 200) {
                   const inUSD = amount/response.data.USD_AED;
                   console.log("Hi");
                   const rand = crypto + "USDT";
                   setCryptoAmt(inUSD/props.priceData[rand]);

                }
              })
              .catch((error) => {
                console.error("Error", error);
                setErrValue("The Crypto Data Feetch Unsuccessful");
              });
                } else if(currencyV == "EUR")  {
                    axios
                     .get("https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=a70e41243fad01998475")
                     .then((response) => {
                       if (response.status === 200) {
                          const inUSD = amount/response.data.USD_EUR;
                          const rand = crypto + "USDT";
                          setCryptoAmt(inUSD/props.priceData[rand]);
       
                       }
                     })
                     .catch((error) => {
                       console.error("Error", error);
                       setErrValue("The Crypto Data Feetch Unsuccessful");
                     });
                 } else if(currencyV == "INR")  {
                    axios
                     .get("https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=a70e41243fad01998475")
                     .then((response) => {
                       if (response.status === 200) {
                          const inUSD = amount/response.data.USD_INR;

                          const rand = crypto + "USDT";
                          setCryptoAmt(inUSD/props.priceData[rand]);
       
                       }
                     })
                     .catch((error) => {
                       console.error("Error", error);
                       setErrValue("The Crypto Data Feetch Unsuccessful");
                     });
                 }
      };
    
    return (
        <React.Fragment>
            <div className="col-xxl-3 col-xl-6 col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">{props.buttonV}</h4>
                  
                    </div>
                    <div className="card-header">
                        <p style={{ color: "red" }}>This Feature is not working right now</p>
                    </div>
                    <div className="card-body">
                        <form method="post" name="myform" className="currency_validate trade-form row g-3">
                            <div className="col-12">
                                <label className="form-label">You Send</label>
                                <div className="input-group">
                                    {/* <select className="form-select" name="method">
                                        <option value="bank">USD</option>
                                        <option value="master">Euro</option>
                                    </select> */}
                                    <CustomDropdown
                                        className="form-select"
                                        name="method"
                                        id="report-select"
                                        options={selectCurrOptions}
                                        defaultLabel="Currency"
                                        value={currency ? currency : "AED"}
                                        onChangeOption={(selected) => { setCurrency(selected); conversionHandler(currencyAmt, selected); }}
                                        />
                                    <input 
                                        type="text" 
                                        name="currency_amount" 
                                        className="form-control"
                                        placeholder="0.0"
                                        value= {currencyAmt}
                                        onChange={(e) => { setCurrencyAmt(e.target.value); conversionHandler(e.target.value, currency); }}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="form-label">You get</label>
                                <div className="input-group">
                                    {/* <select className="form-select" name="method">
                                        <option value="bank">BTC</option>
                                        <option value="master">ETH</option>
                                    </select> */}
                                     <CustomDropdown
                                        className="form-select"
                                        name="method"
                                        id="report-select"
                                        options={selectCryptoOptions}
                                        defaultLabel="Crypto"
                                        value={crypto ? crypto : "BTC"}
                                        onChangeOption={(selected) => setCrypto(selected)}
                                        />
                                    <input 
                                        type="text" 
                                        name="currency_amount" 
                                        className="form-control"
                                        placeholder="0.0"
                                        value= {cryptoAmt}
                                        onChange={(e) => { setCryptoAmt(e.target.value) }}
                                    />
                                </div>
                            </div>
                            <p className="mb-0">0.5% <a href="#">Expected rate <br />No extra
                                            fees</a></p>

                            <button 
                                type="submit" 
                                name="submit" 
                                className="btn btn-success btn-block"
                            >
                                {props.buttonV}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default QuickTrade;
