import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: '1 solid #000',
    width: '100%',
    fontSize: 8,
    height: 20,
  },
});

const TableWithOnlyRows = ({ details, address }) => {
  console.log({ address });
  // Length Will replace with props
  return (
    <View>
      <View style={styles.row}>
        <Text>{details}</Text>
      </View>
      <View style={styles.row}>
        <Text>{address.addressLine1}</Text>
      </View>
      <View style={styles.row}>
        <Text>{address.addressLine2}</Text>
      </View>
      <View style={styles.row}>
        <Text>{address.addressLine3}</Text>
      </View>
    </View>
  );
};

export default TableWithOnlyRows;
