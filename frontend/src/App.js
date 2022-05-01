import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';

import './assets/css/style.css';
import Spinner from './views/Spinner/Spinner';

import axios from './services';
import CustomerInfoForm from './components/CustomerInfoForm/CustomerInfoForm';
import Intro from './views/Introduction/Introduction';
import Login from './views/Login/Login';
// import Signup from './components/Signup/Signup';
import 'react-toastify/dist/ReactToastify.css';
// import HomePage from './components/HomePage/HomePage';
import HomePage from './views/Home/Home';
// import Sidebar from './components/Sidebar/Sidebar';
import CreateJobPage from './components/CreateJobPage/CreateJobPage';
import ViewJobPage from './components/ViewJobPage/ViewJobPage';
import AllJobsPage from './components/AllJobsPage/AllJobsPage';
import DownloadJobPage from './components/DownloadJobPage/DownloadJobPage';
import TestPDF from './components/TestPDF/TestPDF';
import CreateBarcode from './components/CreateBarcode/CreateBarcode';
import ViewBarcode from './components/ViewBarcode/ViewBarcode';
import DownloadBarcodePage from './components/CreateBarcode/CreateBarcodePDF';
import Sidebar from './views/Sidebar/Sidebar';
import Header from './views/Header/Header';
import Profile from './views/Profile/Profile';
import Settings from './views/Settings/Settings';
import Locked from './views/AccountLocked/AccountLocked';
import Signup from './views/Signup/Signup';
import ResetPassword from './views/ResetPassword/ResetPassword';
import VerifyOTP from './views/VerifyOTP/VerifyOTP';
import VerMessage from './views/VerifiedMessage/VerifiedMessage';
import VerEmail from './views/VerifyEmail/VerifyEmail';
import ResendOTP from './views/ResendOTP/ResendOTP';

toast.configure();

function App() {
  const history = useHistory();
  const location = useLocation();
  const redirect = !false;

  useEffect(() => {
    (function () {
      const authorizationToken = localStorage.getItem('userToken');
      const token = authorizationToken; //temp
      if (token) {
        axios.defaults.headers.common['x-access-token'] = token;
      } else {
        axios.defaults.headers.common['x-access-token'] = null;
      }
    })();
  });

  const dispatch = useDispatch();
  const { authUser, logout } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (
      location.pathname !== '/login' &&
      (authUser === null || authUser === undefined || authUser === 'undefined')
    ) {
      history.push('/login');
    } else if (location.pathname === '/login' && authUser && !logout) {
      history.push('/');
    }
  }, [authUser, history, location.pathname, logout]);

  let mainContent = (
    <>
      <Route
        exact
        path='/'
        component={React.lazy(() => import('./views/Introduction/Introduction'))}
      />
       <Route
        exact
        path='/login'
        component={React.lazy(() => import('./views/Login/Login'))}
      />
      <Route path='/signup' component={Signup} exact/>
      <Route path='/reset-password' component={ResetPassword} exact/>
      <Route path='/verify-otp' component={VerifyOTP} exact/>
      <Route path='/resend-otp' component={ResendOTP} exact/>
      <Route path='/verified-message/:id/:email' component={VerMessage} exact/>
      <Route path='/verify-email' component={VerEmail} exact/>
    </>
  )

  if(authUser) {
    mainContent = (
      <>
          <Route path='/customer' component={CustomerInfoForm} />
          <Route path='/' component={HomePage}  exact/>
          <Route path='/create-job' component={CreateJobPage} exact />
          <Route path='/edit-job/:jobId' component={CreateJobPage} />
          <Route path='/view-job/:jobId' component={ViewJobPage} />
          <Route path='/jobs' component={AllJobsPage} exact />
          <Route path='/jobs/edit/:jobId' component={CreateJobPage} />
          <Route path='/download-job' component={DownloadJobPage} />
          <Route path='/download-barcode' component={DownloadBarcodePage} />
          <Route path='/test-pdf' component={TestPDF} />
          <Route path='/create-barcode' component={CreateBarcode} />
          <Route path='/barcode' component={ViewBarcode} exact/>
          <Route path='/profile' component={Profile} exact/>
          <Route path='/settings-profile' component={Settings} exact/>
          <Route path='/account-locked' component={Locked} exact/>
          
      </>
    )
  }

  // return (
  //   <Fragment>
  //     {authUser && <Sidebar />}
  //     <Switch>

  //       <div style={{ marginLeft: '250px' }}>
  //         <Route path='/customer' component={CustomerInfoForm} />
  //         <Route path='/' component={HomePage} exact />
  //         <Route path='/create-job' component={CreateJobPage} exact />
  //         <Route path='/edit-job/:jobId' component={CreateJobPage} />
  //         <Route path='/view-job/:jobId' component={ViewJobPage} />
  //         <Route path='/jobs' component={AllJobsPage} exact />
  //         <Route path='/jobs/edit/:jobId' component={CreateJobPage} />
  //         <Route path='/download-job' component={DownloadJobPage} />
  //         <Route path='/download-barcode' component={DownloadBarcodePage} />
  //         <Route path='/test-pdf' component={TestPDF} />
  //         <Route path='/create-barcode' component={CreateBarcode} />
  //         <Route path='/barcode' component={ViewBarcode} exact/>
  //       </div>
  //     </Switch>

  //     {/* Toaster Container  */}
  //     <div style={{ position: 'fixed', top: '92px', right: '92px', zIndex: '3' }}>
  //       <ToastContainer containerId='appLayoutToaster' />
  //     </div>
  //   </Fragment>
  // );

  return (
    <React.Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <Switch>
        <React.Fragment>
          {authUser &&
        <>
        <Header />
        <Sidebar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
          }
        <div style={{ marginLeft: '100px' }}>
          {mainContent}
          </div>
          <br />
          <br />
          <br />
          </React.Fragment>
        </Switch>
      </BrowserRouter>
      <div style={{ position: 'fixed', top: '92px', right: '92px', zIndex: '3' }}>
        <ToastContainer containerId='appLayoutToaster' />
      </div>
    </React.Suspense>
  );
}

export default App;