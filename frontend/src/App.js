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

toast.configure();

function App() {
  const history = useHistory();
  const location = useLocation();
  const redirect = !false;

  (function () {
    const authorizationToken = localStorage.getItem('userToken');
    const token = 'Bearer ' + authorizationToken;
    console.log({ token });
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      axios.defaults.headers.common.Authorization = null;
    }
  })();

  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.Auth.authUser);

  console.log({ authUser });
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
      <Sidebar />
      <Switch>
        <Route path='/customer' component={CustomerInfoForm} />
        <Route path='/login' component={Login} />
        <Route path='/' component={HomePage} />
        {/* <Route path='/' exact render={() => <Redirect to='/login' />} /> */}

        {/* Hiding Registration temporary */}
        {/* <Route path='/signup' component={Signup} /> */}
      </Switch>

      {/* Toaster Container  */}
      <div style={{ position: 'fixed', top: '92px', right: '92px', zIndex: '3' }}>
        <ToastContainer containerId='appLayoutToaster' />
      </div>
    </Fragment>
  );
}

export default App;
