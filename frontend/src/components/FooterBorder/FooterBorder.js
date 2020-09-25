import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: -130,
    left: 0,
    right: 0,
  },
});

const FooterBorder = () => {
  return (
    <View style={styles.footer}>
      <View style={{ border: 1, marginTop: 30 }} />
      <View style={{ border: '1 solid red', marginTop: '2px' }} />
    </View>
  );
};

export default FooterBorder;
