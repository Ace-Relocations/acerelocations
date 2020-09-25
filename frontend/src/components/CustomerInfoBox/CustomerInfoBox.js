import React from 'react';
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    borderBottomWidth: '1 solid #000',
    width: '100%',
    fontSize: 8,
    height: 20,
    paddingTop: 3,
  },
  rowWithoutBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 8,
    marginTop: 5,
  },
  subRow: {
    width: '33%',
    display: 'flex',
    flexDirection: 'row',
  },
  subRow50: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
  },
  addressLine: {
    color: '#000',
  },
  rowHeading: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  rowSubHeading: {
    fontWeight: 'bold',
    marginRight: 10,
  },
});

const CustomerInfoBox = () => {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.rowHeading}>Customer Name: </Text>
        <Text>asdf</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowHeading}>Address: </Text>
        <Text>asdf</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.subRow}>
          <Text style={styles.rowHeading}>Contact No: </Text>
          <Text style={styles.rowSubHeading}>asdf</Text>
        </View>
        <View style={styles.subRow}>
          <Text style={styles.rowHeading}>Birth Date: </Text>
          <Text style={styles.rowSubHeading}>asdf</Text>
        </View>
        <View style={styles.subRow}>
          <Text style={styles.rowHeading}>Anniversary: </Text>
          <Text style={styles.rowSubHeading}>asdf</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.subRow}>
          <Text style={styles.rowHeading}>Job No: </Text>
          <Text style={styles.rowSubHeading}>asdf</Text>
        </View>
        <View style={styles.subRow}>
          <Text style={styles.rowHeading}>GCNNo.: </Text>
          <Text style={styles.rowSubHeading}>asdf</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.subRow}>
          <Text style={styles.rowHeading}>Destination: </Text>
          <Text style={styles.rowSubHeading}>asdf</Text>
        </View>
        <View style={styles.subRow}>
          <Text style={styles.rowHeading}>E-mail: </Text>
          <Text style={styles.rowSubHeading}>asdf</Text>
        </View>
      </View>
    </>
  );
};

export default CustomerInfoBox;
