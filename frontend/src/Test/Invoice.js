import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';

import InvoiceTitle from './InvoiceTitle';
import BillTo from './BillTo';
import InvoiceNo from './InvoiceNo';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceThankYouMsg from './InvoiceThankYouMsg';
import CustomerCopy from '../components/CustomerCopy/CustomerCopy';

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
    // let: 0
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

const address = [
  { line: '6TH LANE,2ND CROSS BHAGYANAGAR' },
  { line: ' KALYANDURGAM ROAD,ANANTAPUR,' },
  { line: 'ANDHRA PRADESH-515001' },
];

const Invoice = ({ invoice }) => {
  const { firstName, lastName } = invoice;
  return (
    <Document>
      <Page size='A4' style={styles.page} orientation='landscape'>
        <CustomerCopy
          firstName={firstName}
          lastName={lastName}
          title='CUSTOMER COPY'
          address={address}
        />
        <CustomerCopy
          firstName={firstName}
          lastName={lastName}
          title='TRUCK COPY'
          address={address}
        />
      </Page>
    </Document>
  );
};

// const Invoice = ({ invoice }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <Image style={styles.logo} src={logo} />
//       <InvoiceTitle title="Ace Relocation" />
//       <InvoiceNo invoice={invoice} />
//       <BillTo invoice={invoice} />
//       <InvoiceItemsTable invoice={invoice} />
//       <InvoiceThankYouMsg />
//     </Page>
//   </Document>
// );

export default Invoice;
