import React from 'react';
import { Page, Document, StyleSheet, View } from '@react-pdf/renderer';
import Header from '../Header/Header';
import InvoiceTable from '../InvoiceTable/InvoiceTable';
import Reciept from '../Reciept/Reciept';
import HeaderWithAddress from '../HeaderWithAddress/HeaderWithAddress';

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

const CreateInvoiceOnlyPDF = ({ invoice }) => {
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
    carGcnno,
    email,
    insuranceP,
    insuranceA,
    type,
    date,
    gcnno,
    isInvoiceAdded,
    isExpenseAdded,
    gst,
    invoice: invoiceData,

    // will be added later
    rupeesInNumber = '',
    rupeesInText = '',
    chequeNo = '',
    billNo = '',
    lrNo = '',
  } = invoice;

  let invoiceDetail = {
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
    carGcnno,
    phone: contact,
    // carGcnno,
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
      from: `${consignorF} ${consignorL}`,
      to: `${consigneeF} ${consigneeL}`,
      originAddress: {
        addressLine1: oaddress1,
        addressLine2: oaddress2 || `${oaddress2}, ${ocity}`,
        addressLine3: `${ocity} - ${opincode}`,
      },

      destinationAddress: {
        addressLine1: daddress1,
        addressLine2: daddress2 || `${daddress2}, ${dcity}`,
        addressLine3: `${dcity} - ${dpincode}`,
      },
    },
    tellyData: {
      fullName: `${consignorF} ${consignorL}`,
      location: ocity,
      mode: 'Road',
      gcnno,
      jobno: '??',
      origin: ocity,
      date,
      destination: dcity,
      originAddress: {
        addressLine1: oaddress1,
        addressLine2: oaddress2 || `${oaddress2}, ${ocity}`,
        addressLine3: `${ocity} - ${opincode}`,
      },

      destinationAddress: {
        addressLine1: daddress1,
        addressLine2: daddress2 || `${daddress2}, ${dcity}`,
        addressLine3: `${dcity} - ${dpincode}`,
      },
    },
    transitData: {
      fullName: `${consignorF} ${consignorL}`,
      gcnno,
      date
    },
    reciept: {
      chequeIssuer: `${consignorF} ${consignorL}`,
      rupeesInNumber: invoiceData[0]?.total,
      rupeesInText: invoiceData[0]?.totalInText,
      chequeNo,
      recieptDate: invoiceData[0]?.recieptDate,
      date,
      billNo: invoiceData[0]?.billno,
      lrNo: invoiceData[0] ?.gcnno ? invoiceData[0] ?.gcnno : carGcnno,
      carLrNo: invoiceData[0] ?.gcnno && carGcnno ? carGcnno : null,
      from: ocity,
      to: dcity,
    },
    invoice: {
      name: `${consignorF} ${consignorL}`,
      ocity,
      dcity,
      invoiceNo: invoiceData[0]?.billno,
      invoiceDate: invoiceData[0]?.invoiceDate,
      date,
      carGcnno,
      lrNo: invoiceData[0] ?.gcnno ? invoiceData[0] ?.gcnno : carGcnno,
      invoiceDetails: invoiceData[0]?.invoiceDetails,
      total: invoiceData[0]?.total,
      totalInWords: invoiceData[0]?.totalInText,
      paymentCity: dcity,
      gst: gst,
    },
  };

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View>
          <Header />
          <InvoiceTable invoice={invoiceDetail?.invoice} />
        </View>
      </Page>

      <Page size='A4' style={styles.page} orientation='landscape'>
        <View style={{ border: 1, margin: 50, padding: 10 }}>
          <HeaderWithAddress />
          <View style={{ marginTop: 20, padding: 10 }}>
            <Reciept reciept={invoiceDetail?.reciept} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CreateInvoiceOnlyPDF;
