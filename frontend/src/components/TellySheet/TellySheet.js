import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import Header from '../Header/Header';
import FooterWithImage from '../FooterWithImage/FooterWithImage';
import TellySheetTable from '../TellySheetTable/TellySheetTable';

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
});

const invoice = {
  consignor: {
    consignorF: 'cccddd',
    consignorL: 'WR12',
  },
  location: 'Ahm',
  mode: 'Road',
  gcnno: 'M010',
  jobno: 'bonnsi',
  origin: 'Ahme',
  date: '11/11/11',
  destination: '112324',
};

const TellySheet = ({ tellyData }) => {
  return (
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
            <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>
              {tellyData.fullName}
            </Text>
          </View>
          <View style={{ borderRight: 1, width: '13%' }}>
            <Text style={{ marginVertical: 'auto' }}>LOCATION</Text>
          </View>
          <View style={{ borderRight: 1, width: '13.33%' }}>
            <Text style={{ marginVertical: 'auto' }}>{tellyData ?.location}</Text>
          </View>
          <View style={{ borderRight: 1, width: '13.33%' }}>
            <Text style={{ marginVertical: 'auto' }}>MODE</Text>
          </View>
          <View style={{ borderRight: 1, width: '13.33%' }}>
            <Text style={{ marginVertical: 'auto' }}>{tellyData ?.mode}</Text>
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
            <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>{tellyData ?.gcnno ? tellyData ?.gcnno : tellyData ?.carGcnno}</Text>
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
            <Text style={{ marginVertical: 'auto' }}>{tellyData ?.origin}</Text>
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
            <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>{tellyData ?.date}</Text>
          </View>
          <View style={{ borderRight: 1, width: '16.66%' }}>
            <Text style={{ marginVertical: 'auto' }}>JOB DATE</Text>
          </View>
          <View style={{ borderRight: 1, width: '16.66%' }}>
            <Text style={{ marginVertical: 'auto' }}>{tellyData ?.date}</Text>
          </View>
          <View style={{ borderRight: 1, width: '16.66%' }}>
            <Text style={{ marginVertical: 'auto' }}>DESTINATION</Text>
          </View>
          <View style={{ borderRight: 1, width: '16.66%' }}>
            <Text style={{ marginVertical: 'auto' }}>{tellyData ?.destination}</Text>
          </View>
        </View>

        <View style={{ marginTop: '10px' }}>
          <TellySheetTable />
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
            height: 80,
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
            height: 50,
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
  );
};

export default TellySheet;
