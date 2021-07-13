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
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

const Header = () => {
  return (
    <View>
      <View style={styles.container} wrap={false}>
        <View style={{ width: '50%' }}>
          <Image style={styles.logo} src={logo} />
        </View>
        <View style={{ width: '50%', color: 'red', textAlign: 'right' }}>
          <Text> WE MAKE MOVING EASY</Text>
        </View>
      </View>

      <View style={{ border: 1 }} />
      <View style={{ border: '1 solid red', marginTop: '2px' }} />
    </View>
  );
};

export default Header;
