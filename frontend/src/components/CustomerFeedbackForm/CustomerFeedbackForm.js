import React from 'react';
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    justifyContent: 'space-between',
    borderBottom: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: 800,
    textDecoration: 'underline',
  },
});

const CustomerFeedbackForm = () => {
  return (
    <View>
      <View style={{ textAlign: 'center' }}>
        <Text style={styles.title}>CUSTOMER FEEDBACK FORM AT DESTINATION</Text>
      </View>
      <View style={{ fontSize: 8, marginTop: 10 }}>
        <Text>Dear valued Customer,</Text>
        <Text style={{ marginTop: 10 }}>
          Thank you for choosing Ace Relocations, it is our great pleasure to provide you the best
          quality of service at all times. Your assistance in completing this form is greatly
          appreciated. Your honest feedback will help us to serve you better and enable us to work
          on improving our service standards. Thankyou.
        </Text>
      </View>
    </View>
  );
};

export default CustomerFeedbackForm;
