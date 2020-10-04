import React, { Fragment } from 'react';
import { Switch, Route, Redirect, Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import axios from './services';
import CustomerInfoForm from './components/CustomerInfoForm/CustomerInfoForm';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import CreateJobPage from './components/CreateJobPage/CreateJobPage';
import ViewJobPage from './components/ViewJobPage/ViewJobPage';
import AllJobsPage from './components/AllJobsPage/AllJobsPage';

toast.configure();

function App() {
  const history = useHistory();
  const location = useLocation();
  const redirect = !false;

  (function () {
    const authorizationToken = localStorage.getItem('userToken');
    const token = authorizationToken; //temp
    console.log({ token });
    if (token) {
      axios.defaults.headers.common['x-access-token'] = token;
    } else {
      axios.defaults.headers.common['x-access-token'] = null;
    }
  })();

  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.Auth.authUser);

  if (
    location.pathname != '/login' &&
    (authUser == null || authUser == undefined || authUser == 'undefined')
  ) {
    history.push('/login');
  } else if (location.pathname == '/login' && authUser) {
    history.push('/');
  }

  return (
    <Fragment>
      {authUser && <Sidebar />}
      <Switch>
        <Route path='/login' component={Login} />

        <div style={{ marginLeft: '250px' }}>
          <Route path='/customer' component={CustomerInfoForm} />
          <Route path='/' component={HomePage} exact />
          <Route path='/create-job' component={CreateJobPage} exact />
          <Route path='/edit-job/:jobId' component={CreateJobPage} />
          <Route path='/view-job/:jobId' component={ViewJobPage} />
          <Route path='/jobs' component={AllJobsPage} exact />
          <Route path='/jobs/edit/:jobId' component={CreateJobPage} />
          {/* <Route path='/view-job' exact render={() => <Redirect to='/' />} /> */}

          {/* <Route path='/' exact render={() => <Redirect to='/login' />} /> */}

          {/* Hiding Registration temporary */}
          {/* <Route path='/signup' component={Signup} /> */}
        </div>
      </Switch>

      {/* Toaster Container  */}
      <div style={{ position: 'fixed', top: '92px', right: '92px', zIndex: '3' }}>
        <ToastContainer containerId='appLayoutToaster' />
      </div>
    </Fragment>
  );
}

export default App;
