import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  rowWithoutBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 8,
    marginTop: 5,
  },
});

const CustomerCommnetsBox = () => {
  return (
    <>
      <View style={styles.rowWithoutBorder}>
        <View>
          <Text>We will appreciate your valuable comments</Text>
        </View>
      </View>
      <View style={{ borderBottom: 1, marginTop: 20 }} />
      <View style={{ borderBottom: 1, marginTop: 20 }} />
      <View style={{ borderBottom: 1, marginTop: 20 }} />
      <View style={{ borderBottom: 1, marginTop: 20 }} />
    </>
  );
};

export default CustomerCommnetsBox;
