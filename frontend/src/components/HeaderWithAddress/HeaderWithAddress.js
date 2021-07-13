import React from 'react';
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';

import logo from '../../logo.png';

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 76,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'end',
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 9,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

const HeaderWithAddress = () => {
  return (
    <View>
      <View style={styles.container} wrap={false}>
        <View style={{ width: '60%' }}>
          <Image style={styles.logo} src={logo} />
        </View>
        <View style={{ width: '40%', color: 'grey', textAlign: 'justify', lineHeight: 1.2 }}>
          <Text>310, Arista Business Spaces, Sindhubhavan Road, </Text>
          <Text>Opp. Stellar, Sindhu Bhavan Road, Off. S.G.Highway,</Text>
          <Text> Bodakdev, Ahmedabad-380053. M. 98252 19378</Text>
          <Text> E:info@acerelocations.co.in W: www.acerelocations.co.in</Text>
        </View>
      </View>

      <View style={{ border: 1 }} />
      <View style={{ border: '1 solid red', marginTop: '2px' }} />
    </View>
  );
};

export default HeaderWithAddress;
