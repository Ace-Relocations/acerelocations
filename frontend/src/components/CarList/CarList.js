import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import TableWithOnlyRows from '../TableWithOnlyRows/TableWithOnlyRows';
import LuggageListTable from '../LuggageListTable/LuggageListTable';
import CustomerInfoBoxCarList from '../CustomerInfoBox/CustomerInfoBoxCarList';
import carList from '../../assets/carList.png';


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
        <Text>{ocity}</Text>
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
        <Text>{dcity}</Text>
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

const CarList = ({ carListDetails, ...props }) => {
//   const {
//     ocity,
//     dcity,
//     gcnno,
//     date,
//     from,
//     to,
//     originAddress,
//     destinationAddress,
//   } = CarListDetails;

  return (
    <View>

      <View style={{ marginTop: 10, border: '1 1 0 1' }}>
        <CustomerInfoBoxCarList customer={carListDetails} />
      </View>

      

        {/* <View style={{ marginTop: 5 }}>
          <LuggageListTable />
        </View> */}

        <View style={{ width: '100%', border: 1, marginTop: 20 }}>
           <Image
                src={carList}
              />
        </View>

         

      </View>
  );
};

export default CarList;
