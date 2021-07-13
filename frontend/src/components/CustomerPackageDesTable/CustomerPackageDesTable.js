import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  title1: {
    color: 'red',
    fontSize: 12,
    borderBottom: 1,
  },
});

const CustomerPackageDesTable = ({ description, noOfPkg }) => {
  return (
    <>
      <View
        style={{
          border: 1,
          width: '100%',
          flexDirection: 'row',
        }}
      >
        <View style={{ borderRight: 1, width: '70%' }}>
          <Text style={styles.title1}>Description</Text>
        </View>
        <View style={{ width: '30%' }}>
          <Text style={styles.title1}>No. of Pkgs.</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          border: 1,
        }}
      >
        { description == "car"?
        <View style={{ width: '70%' }}>
          <Text>
            Old and used <Text>{description}</Text> for personal use only, not meant for sell
            and has no commercial value
          </Text>
        </View> :
        <View style={{ width: '70%' }}>
          <Text>
            Old and used <Text>{description}</Text> item for personal use only, not meant for sell
            and has no commercial value
          </Text>
       </View>
        }
        <View style={{ width: '30%', borderLeft: 1, alignItems: 'center' }}>
          <Text>{noOfPkg}</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          border: 1,
          fontSize: 8,
          lineHeight: 2.7
        }}
      >
        <View style={{ width: '50%' }}>
          <Text style={styles.title1}>Customer's Sign.</Text>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={styles.title1}>Prepared By</Text>
        </View>
      </View>
    </>
  );
};

export default CustomerPackageDesTable;
