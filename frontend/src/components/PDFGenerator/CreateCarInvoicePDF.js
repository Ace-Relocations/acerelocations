import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import CustomerCopy from '../CustomerCopy/CustomerCopy';
import CustomerFeedbackForm from '../CustomerFeedbackForm/CustomerFeedbackForm';
import Header from '../Header/Header';
import LuggageList from '../LuggageList/LuggageList';
import TransitPlanFormBox from '../TransitPlanFormBox/TransitPlanFormBox';
import FooterWithImage from '../FooterWithImage/FooterWithImage';
import InvoiceTable from '../InvoiceTable/InvoiceTable';

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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    justifyContent: 'space-between',
    borderBottom: 1,
    marginBottom: 10,
  },
  logo: {
    width: 74,
    height: 66,
  },
  logo1: {
    width: 74,
    height: 66,
    alignItems: 'center',
    margin: '0 auto',
  },
  headerText: {
    width: '50%',
    fontSize: 20,
    alignItems: 'flex-end',
    color: 'red',
    marginRight: 20,
  },
  headerSubText: {
    marginTop: '10px',
    fontSize: 10,
    alignItems: 'flex-end',
    width: '60%',
    color: 'red',
    textAlign: 'center',
    // jus
  },
  width90: {
    width: '90%',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  cognisor: {
    color: '#000',
  },
  cognisor1: {
    alignItems: 'center',
  },
  box: {
    border: 1,
  },
  title: {
    color: 'red',
    fontSize: 12,
  },
  title1: {
    color: 'red',
    fontSize: 12,
    borderBottom: 1,
  },
  width60: {
    width: '60%',
  },
  width70: {
    width: '70%',
  },
  width30: {
    width: '30%',
  },
  width50: {
    width: '50%',
  },
  description: {
    width: '75%',
    textAlign: 'left',
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: '25%',
    textAlign: 'right',
    paddingRight: 8,
  },
});

const CreateCarInvoicePDF = ({ invoice }) => {
  const {
    consignorF,
    consignorL,
    consigneeF,
    consigneeL,
    oaddress1,
    oaddress2 = '',
    ocity,
    ostate,
    opincode,
    daddress1,
    daddress2 = '',
    dcity,
    dstate,
    dpincode,
    status,
    contact,
    car,
    email,
    insuranceP,
    insuranceA,
    type,
    date,
    gcnno,

    // will be added later
    rupeesInNumber = '',
    rupeesInText = '',
    chequeNo = '',
    billNo = '',
    lrNo = '',
  } = invoice;

  const invoiceDetail = {
    consignor: { firstName: consignorF, lastName: consignorL },
    consignee: { firstName: consigneeF, lastName: consigneeL },
    contact,
    email,
    originAddress: [oaddress1, `${oaddress2}, ${ocity}`, `${ostate} - ${opincode}`],
    destinationAddress: [daddress1, `${daddress2}, ${dcity}`, `${dstate} - ${dpincode}`],
    status,
    car,
    insuranceP,
    insuranceA,
    type,
    date,
    gcnno,
    customer: {
      firstName: consignorF,
      lastName: consignorL,
      adderess: `${oaddress1}, ${oaddress2}, ${ocity} - ${opincode}`,
      contact,
      gcnno,
      birthDate: '',
      Anniversary: '',
      jobno: gcnno,
      destination: dcity,
      email,
    },
    luggageListDetails: {
      ocity,
      dcity,
      gcnno,
      date,
      from: consignorF,
      to: consignorL,
    },
  };
  return (
    <Document>
      <Page size='A4' style={styles.page} orientation='landscape'>
        <CustomerCopy
          title='CUSTOMER COPY'
          consignor={invoiceDetail?.consignor}
          consignee={invoiceDetail?.consignee}
          originAddress={invoiceDetail?.originAddress}
          destinationAddress={invoiceDetail?.destinationAddress}
          type={invoiceDetail?.type}
          gcnno={invoiceDetail?.carGcnno}
          date={invoiceDetail?.date}
        />
      </Page>
      <Page size='A4' style={styles.page} orientation='landscape'>
        <CustomerCopy
          title='TRUCK COPY'
          consignor={invoiceDetail?.consignor}
          consignee={invoiceDetail?.consignee}
          originAddress={invoiceDetail?.originAddress}
          destinationAddress={invoiceDetail?.destinationAddress}
          type={invoiceDetail?.type}
          gcnno={invoiceDetail?.carGcnno}
          date={invoiceDetail?.date}
        />
      </Page>
      {/* CustomerFeedbackForm */}

      <Page size='A4' style={styles.page}>
        <Header />
        <CustomerFeedbackForm title='DESTINATION' customer={invoiceDetail?.customer} />
      </Page>
      <Page size='A4' style={styles.page}>
        <Header />
        <CustomerFeedbackForm title='ORIGIN' customer={invoiceDetail?.customer} />
      </Page>

      {/* LuggageList */}
      <Page size='A4' style={styles.page}>
        <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
      </Page>

      <Page size='A4' style={styles.page}>
        <View>
          <Header />
          <InvoiceTable invoice={invoiceDetail?.invoice} />
        </View>
      </Page>

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
  );
};

export default CreateCarInvoicePDF;
