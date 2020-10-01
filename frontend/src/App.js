import React, { Fragment } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { PDFViewer, Page, StyleSheet, Document, View } from '@react-pdf/renderer';
import Invoice from './Test/Invoice';
import invoice from './data/invoice';
import MultiStep from './components/MultiStep/MultiStep';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import CustomerInfoForm from './components/CustomerInfoForm/CustomerInfoForm';
import Header from './components/Header/Header';
import CustomerFeedbackForm from './components/CustomerFeedbackForm/CustomerFeedbackForm';
import LuggageList from './components/LuggageList/LuggageList';
import HeaderWithAddress from './components/HeaderWithAddress/HeaderWithAddress';
import Reciept from './components/Reciept/Reciept';
import InvoiceTable from './components/InvoiceTable/InvoiceTable';
import FooterWithImage from './components/FooterWithImage/FooterWithImage';
import TransitPlanFormBox from './components/TransitPlanFormBox/TransitPlanFormBox';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
});

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/customer' component={CustomerInfoForm} />
        <Route path='/login' component={Login} />
        <Route path='/' exact render={() => <Redirect to='/login' />} />

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
