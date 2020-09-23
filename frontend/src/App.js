import React, { Fragment } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from './Test/Invoice';
import invoice from './data/invoice';

import './App.css';
import CustomerInfoForm from './components/CustomerInfoForm/CustomerInfoForm';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/customer' component={CustomerInfoForm} />
        <Route path='/' exact render={() => <Redirect to='/customer' />} />
      </Switch>
      {/* <PDFViewer width="1000" height="1000" className="app">
        <Invoice invoice={invoice} />
      </PDFViewer>
      <CustomerInfoForm /> */}
    </Fragment>
  );
}

export default App;
