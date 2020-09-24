import React, { Fragment } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { PDFViewer, Page, StyleSheet, Document } from '@react-pdf/renderer';
import Invoice from './Test/Invoice';
import invoice from './data/invoice';

import './App.css';
import CustomerInfoForm from './components/CustomerInfoForm/CustomerInfoForm';
import Header from './components/Header/Header';

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
      {/* <Switch>
        <Route path='/customer' component={CustomerInfoForm} />
        <Route path='/' exact render={() => <Redirect to='/customer' />} />
      </Switch> */}
      <PDFViewer width='1000' height='1000' className='app'>
        {/* <Invoice invoice={invoice} /> */}
        <Document>
          <Page size='A4' style={styles.page}>
            <Header />
          </Page>
        </Document>
      </PDFViewer>
    </Fragment>
  );
}

export default App;
