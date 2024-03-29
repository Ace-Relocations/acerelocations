import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import CustomerCopy from '../CustomerCopy/CustomerCopy';
import CustomerFeedbackForm from '../CustomerFeedbackForm/CustomerFeedbackForm';
import Header from '../Header/Header';
import LuggageList from '../LuggageList/LuggageList';
import CarList from '../CarList/CarList';
import TellySheet from '../TellySheet/TellySheet';
import InvoiceTable from '../InvoiceTable/InvoiceTable';
import TransitPlanFormBox from '../TransitPlanFormBox/TransitPlanFormBox';
import TransitPlanCarFormBox from '../TransitPlanCarFormBox/TransitPlanCarFormBox';
import Reciept from '../Reciept/Reciept';
import FooterWithImage from '../FooterWithImage/FooterWithImage';
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

const CreateJobPDF = ({ invoice }) => {
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
    carGcnno = '',
    email,
    insuranceP,
    insuranceA,
    insuranceCarP,
    insuranceCarA,
    insuranceAInText = '',
    insuranceCarAInText = '',
    type,
    date,
    gcnno,
    items,
    gst,
    isInvoiceAdded,
    isExpenseAdded,
    invoice: invoiceData,
    totalInText = '',

    // will be added later
    rupeesInNumber = '',
    chequeNo = '',
    billno,
    lrNo = '',
  } = invoice;

  let invoiceDetail = {
    consignor: { firstName: consignorF, lastName: consignorL },
    consignee: { firstName: consigneeF, lastName: consigneeL },
    contact,
    email,
    originAddress: [oaddress1, `${oaddress2}, ${ocity}`, `${ostate} - ${opincode}`],
    ocity,
    dcity,
    destinationAddress: [daddress1, `${daddress2}, ${dcity}`, `${dstate} - ${dpincode}`],
    status,
    car,
    insuranceP,
    insuranceA,
    insuranceCarP,
    insuranceCarA,
    type,
    date,
    gcnno,
    carGcnno,
    phone: contact,
    items,
    gst,
    // carGcnno,
    customer: {
      firstName: consignorF,
      lastName: consignorL,
      adderess: `${oaddress1}, ${oaddress2}, ${ocity} - ${opincode}`,
      contact,
      gcnno,
      carGcnno,
      birthDate: '',
      Anniversary: '',
      jobno: gcnno,
      destination: dcity,
      email,
    },
    customerDestination: {
      firstName: consignorF,
      lastName: consignorL,
      adderess: `${daddress1}, ${daddress2}, ${dcity} - ${dpincode}`,
      contact,
      gcnno,
      carGcnno,
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
      carGcnno,
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


    carListDetails: {
      firstName: consignorF,
      lastName: consignorL,
      adderess: `${oaddress1}, ${oaddress2}, ${ocity} - ${opincode}`,
      contact,
      gcnno,
      carGcnno,
      birthDate: '',
      Anniversary: '',
      jobno: gcnno,
      destination: dcity,
      email,
    },

    tellyData: {
      fullName: `${consignorF} ${consignorL}`,
      location: ocity,
      mode: 'Road',
      gcnno,
      carGcnno,
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
      carGcnno,
      date,
      moneyInNumber: insuranceA,
      moneyInText: insuranceAInText,
      insuranceP
    },
    transitCarData: {
      fullName: `${consignorF} ${consignorL}`,
      gcnno,
      carGcnno,
      date,
      moneyInNumber: insuranceCarA,
      moneyInText: insuranceCarAInText,
      insuranceCarP
    }
  };

  if (isInvoiceAdded) {
    invoiceDetail = {
      ...invoiceDetail, reciept: {
        chequeIssuer: `${consignorF} ${consignorL}`,
        rupeesInNumber: invoiceData[0] ?.total,
        rupeesInText: invoiceData[0] ?.totalInText,
        chequeNo,
        recieptDate: invoiceData[0]?.recieptDate,
        date,
        billNo: invoiceData[0] ?.billno,
        lrNo: invoiceData[0] ?.gcnno ? invoiceData[0] ?.gcnno : invoiceData[0] ?.carGcnno,
        carLrNo: invoiceData[0] ?.gcnno && carGcnno ? carGcnno : null,
        from: ocity,
        to: dcity,
      },
      invoice: {
        name: `${consignorF} ${consignorL}`,
        ocity,
        dcity,
        invoiceNo: invoiceData[0] ?.billno,
        invoiceDate: invoiceData[0]?.invoiceDate,
        date,
        lrNo: invoiceData[0] ?.gcnno ? invoiceData[0] ?.gcnno : invoiceData[0] ?.carGcnno,
        invoiceDetails: invoiceData[0] ?.invoiceDetails,
        total: invoiceData[0] ?.total,
        totalInWords: invoiceData[0] ?.totalInText,
        paymentCity: dcity,
        gst: invoiceData[0] ?.gst,
      },
    }
  }
  const isCar = type === 'car';
  const isHouseHold = type === 'household';
  const isBoth = type === 'both';
  console.log("GSTNN", invoiceData[0] ?.gst)

  return (
    <Document>
      {/* household CustomerCopy */}
      {(isHouseHold || isBoth) && (
        <>
          <Page size='A4' style={styles.page} orientation='landscape'>
            <CustomerCopy
              title='CUSTOMER COPY'
              consignor={invoiceDetail ?.consignor}
              consignee={invoiceDetail ?.consignee}
              originAddress={invoiceDetail ?.originAddress}
              destinationAddress={invoiceDetail ?.destinationAddress}
              type={isBoth ? 'household' : invoiceDetail ?.type}
              gcnno={invoiceDetail ?.gcnno}
              carGcnno={invoiceDetail ?.carGcnno}
              date={invoiceDetail ?.date}
              phone={invoiceDetail ?.phone}
              ocity={ocity}
              dcity={dcity}
            />
          </Page>
          <Page size='A4' style={styles.page} orientation='landscape'>
            <CustomerCopy
              title='TRUCK COPY'
              consignor={invoiceDetail ?.consignor}
              consignee={invoiceDetail ?.consignee}
              originAddress={invoiceDetail ?.originAddress}
              destinationAddress={invoiceDetail ?.destinationAddress}
              type={isBoth ? 'household' : invoiceDetail ?.type}
              gcnno={invoiceDetail ?.gcnno}
              carGcnno={invoiceDetail ?.carGcnno}
              date={invoiceDetail ?.date}
              phone={invoiceDetail ?.phone}
              ocity={ocity}
              dcity={dcity}
            />
          </Page>
        </>
      )}

      {/* Car CustomerCopy */}
      {(isCar || isBoth) && (
        <>
          <Page size='A4' style={styles.page} orientation='landscape'>
            <CustomerCopy
              title='CUSTOMER COPY'
              consignor={invoiceDetail ?.consignor}
              consignee={invoiceDetail ?.consignee}
              originAddress={invoiceDetail ?.originAddress}
              destinationAddress={invoiceDetail ?.destinationAddress}
              type={isBoth ? 'car' : invoiceDetail ?.type}
              gcnno={invoiceDetail ?.carGcnno}
              carGcnno={invoiceDetail ?.carGcnno}
              date={invoiceDetail ?.date}
              phone={invoiceDetail ?.phone}
              ocity={ocity}
              dcity={dcity}
            />
          </Page>
          <Page size='A4' style={styles.page} orientation='landscape'>
            <CustomerCopy
              title='TRUCK COPY'
              consignor={invoiceDetail ?.consignor}
              consignee={invoiceDetail ?.consignee}
              originAddress={invoiceDetail ?.originAddress}
              destinationAddress={invoiceDetail ?.destinationAddress}
              type={isBoth ? 'car' : invoiceDetail ?.type}
              gcnno={invoiceDetail ?.carGcnno}
              carGcnno={invoiceDetail ?.carGcnno}
              date={invoiceDetail ?.date}
              phone={invoiceDetail ?.phone}
              ocity={ocity}
              dcity={dcity}
            />
          </Page>
        </>
      )}

      {/* CustomerFeedbackForm */}
      <Page size='A4' style={styles.page}>
        <Header />
        <CustomerFeedbackForm title='ORIGIN' customer={invoiceDetail ?.customer} />
      </Page>

      <Page size='A4' style={styles.page}>
        <Header />
        <CustomerFeedbackForm title='DESTINATION' customer={invoiceDetail ?.customerDestination} />
      </Page>

      {/* LuggageList */}
      {(isHouseHold || isBoth) && (invoiceDetail.items < 40 || invoiceDetail.items == 0) ?( 
      <><Page size='A4' style={styles.page}>
          <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
        </Page>
        <Page size='A4' style={styles.page}>
            <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
        </Page>
        <Page size='A4' style={styles.page}>
            <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
        </Page></>) : (isHouseHold || isBoth) &&
      (<><Page size='A4' style={styles.page}>
          <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
        </Page>
        <Page size='A4' style={styles.page}>
            <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
        </Page>
        <Page size='A4' style={styles.page}>
            <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
        </Page>
        <Page size='A4' style={styles.page}>
            <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
        </Page>
        <Page size='A4' style={styles.page}>
            <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
        </Page>
        <Page size='A4' style={styles.page}>
            <LuggageList luggageListDetails={invoiceDetail?.luggageListDetails} />
        </Page></>) 
      }

        {(isCar || isBoth) && (
        <Page size='A4' style={styles.page}>
        <Header />
          <CarList carListDetails={invoiceDetail?.customer} />
        </Page>
        )}

      {/* TellySheet */}
      {(isHouseHold || isBoth) && (
      <TellySheet tellyData={invoiceDetail ?.tellyData} />
      )}

      {/* Transit Protection Plan */}
      {(isHouseHold || isBoth) && (
      <Page size='A4' style={styles.page}>
        <View>
          <Header />
          <TransitPlanFormBox transitData={invoiceDetail ?.transitData} />
          <View style={{ border: 1 }} />
          <View style={{ border: '1 solid red', marginTop: '2px' }} />
          <FooterWithImage />
        </View>
      </Page>
      )}

      {/* Car Transit Protection Plan */}
      {insuranceCarP && (isCar || isBoth) && (
        <>
          <Page size='A4' style={styles.page}>
            <View>
              <Header />
              <TransitPlanCarFormBox transitData={invoiceDetail ?.transitCarData} />
              <View style={{ border: 1 }} />
              <View style={{ border: '1 solid red', marginTop: '2px' }} />
              <FooterWithImage />
            </View>
          </Page>
        </>
      )}

      {/* Invoice */}
      {isInvoiceAdded && (
        <>
          <Page size='A4' style={styles.page}>
            <View>
              <Header />
              <InvoiceTable invoice={invoiceDetail ?.invoice} />
            </View>
          </Page>

          <Page size='A4' style={styles.page} orientation='landscape'>
            <View style={{ border: 1, margin: 50, padding: 10 }}>
              <HeaderWithAddress />
              <View style={{ marginTop: 20, padding: 10 }}>
                <Reciept reciept={invoiceDetail ?.reciept} />
              </View>
            </View>
          </Page>
        </>
      )}
    </Document>
  );
};

export default CreateJobPDF;
