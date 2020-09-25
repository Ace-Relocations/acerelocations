import React from 'react';
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import TableWithOnlyRows from '../TableWithOnlyRows/TableWithOnlyRows';

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

const LuggageListHeader = () => (
  <View style={{ textAlign: 'center' }}>
    <Text style={styles.headerTitle}>TO THE CHECK POST AUTHORITIES</Text>
    <Text style={{ marginTop: 10, fontSize: 10, textAlign: 'justify' }}>
      My household goods as listed belowwhich are old and used are being moved from _______________
      to_______________ by ROAD.These are purely for domestic purpose and not for any kind of sale.
      So please allow destination. Sent through __________________ G.C.No.__________________Dt:
      _____________
    </Text>
  </View>
);

const LuggageList = () => {
  return (
    <View>
      <LuggageListHeader />

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
            <TableWithOnlyRows />
          </View>
          <View style={{ border: 1, width: '45%' }}>
            <TableWithOnlyRows />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LuggageList;
