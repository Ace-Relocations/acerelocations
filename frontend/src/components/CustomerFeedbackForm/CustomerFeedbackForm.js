import React from 'react';
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import CustomerInfoBox from '../CustomerInfoBox/CustomerInfoBox';
import RatingsForm from '../RatingsForm/RatingsForm';
import CustomerCommnetsBox from '../CustomerCommnetsBox/CustomerCommnetsBox';
import FooterBorder from '../FooterBorder/FooterBorder';

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
  checkboxContainer: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    border: 1,
    width: '50%',
    height: 20,
  },
  footer: {
    position: 'absolute',
    bottom: -130,
    left: 0,
    right: 0,
  },
});

const FeedbackHeader = () => (
  <>
    <Text>Dear valued Customer,</Text>
    <Text style={{ marginTop: 10 }}>
      Thank you for choosing Ace Relocations, it is our great pleasure to provide you the best
      quality of service at all times. Your assistance in completing this form is greatly
      appreciated. Your honest feedback will help us to serve you better and enable us to work on
      improving our service standards. Thankyou.
    </Text>
  </>
);
const CustomerFeedbackForm = () => {
  return (
    <View>
      <View style={{ textAlign: 'center', marginTop: 10 }}>
        <Text style={styles.title}>CUSTOMER FEEDBACK FORM AT DESTINATION</Text>
      </View>

      <View style={{ fontSize: 8, marginTop: 10 }}>
        <FeedbackHeader />
      </View>

      <View style={{ marginTop: 10, border: '1 1 0 1' }}>
        <CustomerInfoBox />
      </View>

      <View>
        <RatingsForm />
      </View>

      <View style={{ fontSize: 8 }}>
        <CustomerCommnetsBox />
      </View>

      <View style={{ fontSize: 8, marginTop: 10, flexDirection: 'row' }}>
        <View style={{ width: '75%', paddingRight: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '25%' }}>
              <Text> Customer's Signature: </Text>
            </View>
            <View style={{ width: '75%' }}>
              <View style={{ borderBottom: 1, height: 10 }} />
            </View>
          </View>
        </View>
        <View style={{ width: '25%' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '20%' }}>
              <Text> Date: </Text>
            </View>
            <View style={{ width: '80%' }}>
              <View style={{ borderBottom: 1, height: 10 }} />
            </View>
          </View>
        </View>
      </View>

      <View>
        <FooterBorder />
      </View>
    </View>
  );
};

export default CustomerFeedbackForm;
