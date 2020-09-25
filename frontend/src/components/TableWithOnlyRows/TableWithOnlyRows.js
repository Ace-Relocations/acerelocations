import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: '1 solid #000',
    width: '100%',
    fontSize: 8,
    height: 20,
  },
});

const TableWithOnlyRows = () => {
  // Length Will replace with props
  return (
    <View>
      <View style={styles.row} />
      <View style={styles.row} />
      <View style={styles.row} />
      <View style={styles.row} />
    </View>
  );
};

export default TableWithOnlyRows;
