import React, { Fragment } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { PDFViewer, Page, StyleSheet, Document, View } from '@react-pdf/renderer';
import Invoice from './Test/Invoice';
import invoice from './data/invoice';
import MultiStep from './components/MultiStep/MultiStep';

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
        <Route path='/customer' component={MultiStep} />
        <Route path='/' exact render={() => <Redirect to='/customer' />} />
      </Switch>
      {/* <PDFViewer width='1000' height='1000' className='app'>
        <Document>
          <Page size='A4' style={styles.page}>
            <View>
              <Header />
              <TransitPlanFormBox />
              <View style={{ border: 1 }} />
              <View style={{ border: '1 solid red', marginTop: '2px' }} />
              <FooterWithImage />
            </View>
          </Page>
        </Document>
      </PDFViewer> */}
    </Fragment>
  );
}

export default App;
