import React from 'react';
import { Text, View } from '@react-pdf/renderer';

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
        <View style={{ width: '70%' }}>
          <Text>Ace Relcoatios Uner Carrier's Risk Scheme</Text>
        </View>
        <View style={{ width: '30%', alignItems: 'center' }}>
          <Text>Cbox</Text>
        </View>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', padding: 3 }}>
        <View style={{ width: '70%' }}>
          <Text>Ace Relcoatios Uner Carrier's Risk Scheme</Text>
        </View>
        <View style={{ width: '30%', alignItems: 'center' }}>
          <Text>Cbox</Text>
        </View>
      </View>
    </View>
  );
};

export default ConsignmentBox;
