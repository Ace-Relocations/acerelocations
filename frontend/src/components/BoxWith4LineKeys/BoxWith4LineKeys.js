import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  addressLine: {
    color: '#000',
  },

  title: {
    color: 'red',
    fontSize: 12,
  },
});
const BoxWith4LineKeys = ({ gcnNo, date, from, to }) => {
  console.log("Inside to define the box", gcnNo)

  return (
    <>
      <View style={styles.row}>
        <Text style={styles.title}>GCN No:</Text>
        <Text style={styles.cognisor1}>{gcnNo}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Date:</Text>
        <Text style={styles.cognisor1}>{date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>From:</Text>
        <Text style={styles.cognisor1}>{from}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>To:</Text>
        <Text style={styles.cognisor1}>{to}</Text>
      </View>
    </>
  );
};

export default BoxWith4LineKeys;
