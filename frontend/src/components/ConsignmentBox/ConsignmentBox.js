import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  checkboxContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    border: 1,
    width: '50%',
    height: 20,
  },
});

const ConsignmentBox = () => {
  return (
    <View
      style={{
        border: 1,
        width: '100%',
        fontSize: 7,
        padding: 3,
      }}
    >
      <Text
        style={{
          fontSize: 8,
          textDecoration: 'underline',
          marginBottom: 3,
        }}
      >
        Consignment Insured by:
      </Text>
      <View style={{ width: '100%', flexDirection: 'row', padding: 3 }}>
        <View style={{ width: '70%', alignItems: 'center', marginVertical: 'auto' }}>
          <Text>Ace Relcoatios Uner Carrier's Risk Scheme</Text>
        </View>
        <View style={{ width: '30%', alignItems: 'center' }}>
          {/* <Text>Cbox</Text> */}
          <View style={styles.checkboxContainer}>
            <View style={styles.checkbox} />
          </View>
        </View>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', padding: 3 }}>
        <View style={{ width: '70%', alignItems: 'center', marginVertical: 'auto' }}>
          <Text>Owner Risk /Third Party Insurance by Consignor</Text>
        </View>
        <View style={{ width: '30%', alignItems: 'center' }}>
          {/* <Text>Cbox</Text> */}
          <View style={styles.checkboxContainer}>
            <View style={styles.checkbox} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConsignmentBox;
