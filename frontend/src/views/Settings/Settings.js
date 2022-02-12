import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SettingsHeader from '../SettingsHeader/SettingsHeader';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';

import axiosMain from '../../services';
import { date } from 'yup';

const Settings = () => {
    const [data, setData] = useState({});
    const [emailValue, setEmailValue] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const [usernameValue, setUsernameValue] = useState();
    const [contactValue, setContactValue] = useState();
    const [countryValue, setCountryValue] = useState();
    const [addressValue, setAddressValue] = useState();
    const [cityValue, setCityValue] = useState();
    const [postalCodeValue, setPostalCodeValue] = useState();
    // const [usernameValue, setUsernameValue] = useState();
    const [errValue, setErrValue] = useState();
    const [updateValue, setUpdateValue] = useState(false);
    const [dpValue, setDp] = useState();
    const [fileName, setFileName] = useState();

    useEffect(() => {
        setDp(localStorage.getItem('dp'));
        getUserProfile();
    }, []);

    const getUserProfile = () => {
        axiosMain
            .get('/user/view')
            .then(response => {
                if (response.status === 200) {
                    setData(response.data);
                    console.log("Data", data)
                    setUsernameValue(response.data.username);
                    setEmailValue(response.data.email);
                    setPasswordValue(response.data.password);
                    setContactValue(response.data.number);
                    setAddressValue(response.data.address);
                    setCountryValue(response.data.country);
                    setPostalCodeValue(response.data.postalCode);
                    setCityValue(response.data.city);
                }
            })
            .catch(error => {
                console.error('Error', error);
                setErrValue("This User profile fetch failed");
            });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        // updateProfileAPI();
        axiosMain
            .post('/user/update', {
                username: usernameValue,
                email: emailValue,
                number: contactValue,
                address: addressValue,
                country: countryValue,
                city: cityValue,
                postalCode: postalCodeValue,
                displayPicture: dpValue
            })
            .then(response => {
                if (response.status === 200) {
                    console.log("Response", response)
                    toast.success(`Update Successful`, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log("Dp-changes", dpValue);
                    localStorage.setItem('dp', dpValue);
                    setUpdateValue(true);
                    window.location.reload(false);
                }
            })
            .catch(error => {
                console.error('Error', error);
                setErrValue("This Email is already registered on the platform");
            });
    }
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setFileName(event.target.files[0].name);
            console.log(event.target.files[0].name)
            let reader = new FileReader();
            reader.onload = (e) => {
                setDp(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    return (
        <React.Fragment>
            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12">
                            <div className="page-title">
                                <h4>Profile</h4>
                            </div>
                            <div className="card">
                                <SettingsHeader />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    {updateValue ?
                                                        <h4
                                                            className="card-title"
                                                            style={{ color: "blue" }}>Update Successful</h4>
                                                        :
                                                        null
                                                    }
                                                    <h4 className="card-title">User Profile</h4>
                                                </div>
                                                <div className="card-body">
                                                    <form action="#">
                                                        <div className="row g-3">
                                                            <div className="col-xxl-12">
                                                                <label className="form-label">Your Name</label>
                                                                <input
                                                                    type="text" className="form-control" placeholder="Name"
                                                                    value={usernameValue}
                                                                    onChange={(e) => { setUsernameValue(e.target.value) }}
                                                                />
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="d-flex align-items-center">
                                                                    <img className="mr-3 rounded-circle mr-0 mr-sm-3"
                                                                        src={dpValue}
                                                                        width="55" 
                                                                        height="55"
                                                                        alt="" 
                                                                        />
                                                                    <div className="media-body">
                                                                        <h4 className="mb-0">{usernameValue}</h4>
                                                                        <p className="mb-0">Max file size is 20mb
                                                                    </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="form-file">
                                                                    <input
                                                                        type="file"
                                                                        className="form-file-input"
                                                                        id="customFile"
                                                                        onChange={(e) => { onImageChange(e) }}
                                                                    />
                                                                    <label className="form-file-label" for="customFile">
                                                                        { fileName ?
                                                                        <span className="form-file-text">Choose file...</span>
                                                                        :
                                                                        <span className="form-file-text">{fileName}</span>
                                                                        }
                                                                        <span className="form-file-button">Browse</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">User Profile</h4>
                                                </div>
                                                <div className="card-body">
                                                    <form action="#">
                                                        <div className="row g-3">
                                                            <div className="col-xxl-12">
                                                                <label className="form-label">New Email</label>
                                                                <input
                                                                    type="email" className="form-control"
                                                                    placeholder="Email"
                                                                    value={emailValue}
                                                                    onChange={(e) => { setEmailValue(e.target.value) }} />
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <label className="form-label">New Password</label>
                                                                <input
                                                                    type="password" className="form-control"
                                                                    placeholder="**********"
                                                                    onChange={(e) => { setPasswordValue(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">Personal Information</h4>
                                                </div>
                                                <div className="card-body">
                                                    <form method="post" name="myform" className="personal_validate"
                                                        novalidate="novalidate">
                                                        <div className="row g-4">
                                                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                <label className="form-label">Contact Number</label>
                                                                <input
                                                                    type="text" className="form-control"
                                                                    placeholder="Jannatul Maowa" name="fullname"
                                                                    value={contactValue}
                                                                    onChange={(e) => { setContactValue(e.target.value) }} />
                                                            </div>
                                                            {/* <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                <label className="form-label">Email</label>
                                                                <input
                                                                    type="email" className="form-control"
                                                                    placeholder="Hello@example.com"
                                                                    name="email"
                                                                    value={data.email}
                                                                    onChange={(e) => { setData({ "email": e.target.value }) }} />
                                                            </div> */}
                                                            {/* <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                <label className="form-label">Date of birth</label>
                                                                <input type="text" className="form-control hasDatepicker"
                                                                    placeholder="10-10-2020" id="datepicker"
                                                                    autocomplete="off" name="dob" />
                                                            </div> */}
                                                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                <label className="form-label">Present Address</label>
                                                                <input
                                                                    type="text" className="form-control"
                                                                    placeholder="56, Old Street, Brooklyn"
                                                                    name="presentaddress"
                                                                    value={addressValue}
                                                                    onChange={(e) => { setAddressValue(e.target.value) }} />
                                                            </div>
                                                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                <label className="form-label">Permanent Address</label>
                                                                <input
                                                                    type="text" className="form-control"
                                                                    placeholder="123, Central Square, Brooklyn"
                                                                    name="permanentaddress"
                                                                    value={addressValue}
                                                                    onChange={(e) => { setAddressValue(e.target.value) }} />
                                                            </div>
                                                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                <label className="form-label">City</label>
                                                                <input
                                                                    type="text" className="form-control"
                                                                    placeholder="New York" name="city"
                                                                    value={cityValue}
                                                                    onChange={(e) => { setCityValue(e.target.value) }} />
                                                            </div>
                                                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                <label className="form-label">Postal Code</label>
                                                                <input
                                                                    type="text" className="form-control" placeholder="25481"
                                                                    name="postal"
                                                                    value={postalCodeValue}
                                                                    onChange={(e) => { setPostalCodeValue(e.target.value) }} />
                                                            </div>
                                                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                <label className="form-label">Country</label>
                                                                <input
                                                                    type="text" className="form-control" name="country"
                                                                    value={countryValue}
                                                                    onChange={(e) => { setCountryValue(e.target.value) }}>

                                                                </input>
                                                            </div>

                                                            <div className="col-12">
                                                                <button
                                                                    className="btn btn-success pl-5 pr-5 waves-effect"
                                                                    onClick={(e) => handleUpdate(e)}
                                                                >
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}

export default Settings;