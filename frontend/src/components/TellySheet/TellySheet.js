import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import Header from '../Header/Header';
import FooterWithImage from '../FooterWithImage/FooterWithImage';

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

const TellySheet = () => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <Header />
        <View>
          <View style={{ marginTop: '10px' }}>
            <Text style={{ textAlign: 'center' }}>TALLY SHEET</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              border: 1,
              fontSize: 9,
              height: 20,
              marginTop: '5px',
            }}
          >
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>CONSIGNOR</Text>
            </View>
            <View style={{ borderRight: 1, width: '30.44%' }}>
              <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>Mr. Parag Somani</Text>
            </View>
            <View style={{ borderRight: 1, width: '13%' }}>
              <Text style={{ marginVertical: 'auto' }}>LOCATION</Text>
            </View>
            <View style={{ borderRight: 1, width: '13.33%' }}>
              <Text style={{ marginVertical: 'auto' }}>Ahmedabad</Text>
            </View>
            <View style={{ borderRight: 1, width: '13.33%' }}>
              <Text style={{ marginVertical: 'auto' }}>MODE</Text>
            </View>
            <View style={{ borderRight: 1, width: '13.33%' }}>
              <Text style={{ marginVertical: 'auto' }}>Road</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              borderRight: 1,
              borderLeft: 1,
              fontSize: 9,
              height: 20,
            }}
          >
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>GCN NUMBER</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>M010454</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ marginVertical: 'auto' }}>JOB NO.</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ marginVertical: 'auto' }}>?</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ marginVertical: 'auto' }}>ORIGIN</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ marginVertical: 'auto' }}>Ahmedabad</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              border: '1',
              fontSize: 9,
              height: 20,
            }}
          >
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>GCN DATE</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>14.02.2020</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ marginVertical: 'auto' }}>JOB DATE</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ marginVertical: 'auto' }}>14.02.2020</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ marginVertical: 'auto' }}>DESTINATION</Text>
            </View>
            <View style={{ borderRight: 1, width: '16.66%' }}>
              <Text style={{ marginVertical: 'auto' }}>Mumbai</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: '10px',
            }}
          >
            <View style={{ borderRight: 1, width: '30%' }}></View>
            <View
              style={{
                width: '70%',
                flexDirection: 'row',
                textAlign: 'center',
                border: 1,
                fontSize: 9,
                height: 20,
              }}
            >
              <View style={{ borderRight: 1, width: '25%' }}>
                <Text style={{ textAlign: 'left', marginVertical: 'auto' }}>TOTAL PACKAGES</Text>
              </View>
              <View style={{ borderRight: 1, width: '25%' }}>
                <Text style={{ textAlign: 'center', marginVertical: 'auto' }}></Text>
              </View>
              <View style={{ borderRight: 1, width: '25%' }}>
                <Text style={{ marginVertical: 'auto' }}>VOLUME</Text>
              </View>
              <View style={{ borderRight: 1, width: '25%' }}>
                <Text style={{ marginVertical: 'auto' }}></Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <View style={{ borderRight: 1, width: '30%' }}></View>
            <View
              style={{
                width: '70%',
                flexDirection: 'row',
                textAlign: 'center',
                borderRight: 1,
                borderLeft: 1,
                fontSize: 9,
                height: 20,
              }}
            >
              <View style={{ borderRight: 1, width: '25%' }}>
                <Text style={{ textAlign: 'left', marginVertical: 'auto' }}>TRUCK NUMBER</Text>
              </View>
              <View style={{ borderRight: 1, width: '75%' }}>
                <Text style={{ textAlign: 'center', marginVertical: 'auto' }}></Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <View style={{ borderRight: 1, width: '30%' }}></View>
            <View
              style={{
                width: '70%',
                flexDirection: 'row',
                border: 1,
                fontSize: 9,
                height: 20,
              }}
            >
              <View style={{ borderRight: 1, width: '25%' }}>
                <Text style={{ textAlign: 'left', marginVertical: 'auto' }}>ESCORTED BY</Text>
              </View>
              <View style={{ borderRight: 1, width: '75%' }}>
                <Text style={{ textAlign: 'center', marginVertical: 'auto' }}></Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              border: 1,
              marginTop: '10px',
              width: '100%',
              height: '120px',
            }}
          >
            <Text style={{ textAlign: 'left', padding: '5px' }}>Customer: </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderRight: 1,
              borderLeft: 1,
              borderBottom: 1,
              fontSize: 9,
              height: 60,
            }}
          >
            <View style={{ width: '50%', borderRight: 1 }}>
              <Text style={{ textAlign: 'left', width: '100%', padding: '5px' }}>
                SUPERVISOR'S SIGNATURE
              </Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ textAlign: 'left', width: '100%', padding: '5px' }}>
                CONSIGNOR'S SIGNATURE
              </Text>
            </View>
          </View>
        </View>
        <View style={{ border: '1 solid red', marginTop: '20px' }} />
        <FooterWithImage />
      </Page>
    </Document>
  );
};

export default TellySheet;
