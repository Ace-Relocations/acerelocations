import React from 'react';
import { Text, View } from '@react-pdf/renderer';

const AcknowledgementTable = ({ fullName, number }) => {
  return (
    <View
      style={{
        border: 1,
        width: '100%',
        fontSize: 7,
        color: 'red',
        marginTop: '10px',
      }}
    >
      <Text style={{ fontSize: 12, borderBottom: 1 }}>ACKNOWLEDGEMENT</Text>
      <Text style={{ fontSize: 11, borderBottom: 1, height: '18px' }}>
        Recieved all the goods in good condition
      </Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          borderBottom: 1,
          height: '18px',
        }}
      >
        <View style={{ width: '40%' }}>
          <Text style={{ fontSize: 11, borderBottom: 1, height: '18px' }}>Name: </Text>
        </View>
        <View
          style={{
            width: '80%',
            alignItems: 'flex-start',
            color: 'black',
          }}
        >
          <Text style={{ fontSize: 11, borderBottom: 1, height: '18px' }}>{fullName}</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          borderBottom: 1,
          height: '18px',
        }}
      >
        <View style={{ width: '40%' }}>
          <Text style={{ fontSize: 11, borderBottom: 1, height: '18px' }}>No. :</Text>
        </View>
        <View
          style={{
            width: '80%',
            alignItems: 'flex-start',
            color: 'black',
          }}
        >
          <Text style={{ fontSize: 11, borderBottom: 1, height: '18px', marginLeft: 11 }}>{number}</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          borderBottom: 1,
          height: '18px',
        }}
      >
        <View style={{ width: '40%' }}>
          <Text style={{ fontSize: 11, borderBottom: 1, height: '18px' }}>Sign.</Text>
        </View>
        <View
          style={{
            width: '80%',
            alignItems: 'flex-start',
            color: 'black',
          }}
        >
          <Text style={{ fontSize: 11, borderBottom: 1, height: '18px' }}> </Text>
        </View>
      </View>
    </View>
  );
};

export default AcknowledgementTable;
