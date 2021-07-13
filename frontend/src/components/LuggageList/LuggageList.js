import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import TableWithOnlyRows from '../TableWithOnlyRows/TableWithOnlyRows';
import LuggageListTable from '../LuggageListTable/LuggageListTable';

const styles = StyleSheet.create({
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
  headerTitle: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: '1 solid #000',
    width: '100%',
    fontSize: 8,
    height: 20,
  },
});
const LuggageListHeader = ({ ocity, dcity, gcnno, date }) => (
  <View style={{ textAlign: 'center' }}>
    <Text style={styles.headerTitle}>TO THE CHECK POST AUTHORITIES</Text>
    <Text style={{ marginTop: 10, fontSize: 10, textAlign: 'justify' }}>
      My household goods as listed belowwhich are old and used are being moved from{' '}
      <View
        style={{
          marginHorizontal: 10,
          width: 500,
          borderBottom: 1,
          textAlign: 'center',
          borderBottomColor: '#000',
          marginRight: 5,
        }}
      >
        <Text>{dcity}</Text>
      </View>{' '}
      to{' '}
      <View
        style={{
          marginHorizontal: 10,
          width: 50,
          borderBottom: 1,
          textAlign: 'center',
          borderBottomColor: '#000',
          marginRight: 5,
        }}
      >
        <Text>{ocity}</Text>
      </View>
      by ROAD.These are purely for domestic purpose and not for any kind of sale. So please allow
      destination. Sent through{' '}
      <View
        style={{
          marginHorizontal: 10,
          width: 70,
          borderBottom: 1,
          textAlign: 'center',
          borderBottomColor: '#000',
          marginRight: 5,
        }}
      >
        <Text> Ace Relocations </Text>
      </View>{' '}
      G.C.No.{' '}
      <View
        style={{
          marginHorizontal: 10,
          width: 90,
          borderBottom: 1,
          textAlign: 'center',
          borderBottomColor: '#000',
          marginRight: 5,
        }}
      >
        <Text>{gcnno}</Text>
      </View>{' '}
      Dt:{' '}
      <View
        style={{
          marginHorizontal: 10,
          width: 80,
          borderBottom: 1,
          textAlign: 'center',
          borderBottomColor: '#000',
          marginRight: 5,
        }}
      >
        <Text>{date}</Text>
      </View>
    </Text>
  </View>
);

const LuggageList = ({ luggageListDetails }) => {
  const {
    ocity,
    dcity,
    gcnno,
    date,
    from,
    to,
    originAddress,
    destinationAddress,
  } = luggageListDetails;

  return (
    <View>
      <LuggageListHeader ocity={ocity} dcity={dcity} gcnno={gcnno} date={date} />

      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <View style={{ width: '45%' }}>
            <Text>From:</Text>
          </View>
          <View style={{ width: '45%' }}>
            <Text>To:</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: '0 10' }}>
          <View style={{ border: 1, width: '45%' }}>
            <TableWithOnlyRows details={from} address={originAddress} />
          </View>
          <View style={{ border: 1, width: '45%' }}>
            <TableWithOnlyRows details={to} address={destinationAddress} />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <LuggageListTable />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, height: 30 }}>
          <View style={{ width: '30%', height: 30 }}>
            <View
              style={{
                width: '80%',
                // border: 1,
                flexDirection: 'row',
                height: 30,
                textAlign: 'center',
              }}
            >

            </View>
          </View>

          <View style={{ width: '70%', height: 30, alignItems: 'flex-end' }}>
            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                height: 30,
                textAlign: 'center',
              }}
            >
              <View
                style={{
                  width: '40%',
                  textAlign: 'center',
                  alignContent: 'flex-end',
                }}
              >
                <Text style={{ fontSize: 10, marginVertical: 'auto' }}>Customer Signature</Text>
              </View>
              <View style={{ width: '60%', border: 1 }}>
                {/* <Image style={{ width: '25px', height: '25px', marginLeft: '60px' }} src={signImage} /> */}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LuggageList;
