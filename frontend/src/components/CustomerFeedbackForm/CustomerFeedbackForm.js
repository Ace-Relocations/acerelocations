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

const CustomerFeedbackForm = () => {
  return (
    <View>
      <View style={{ textAlign: 'center', marginTop: 10 }}>
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
      <View style={{ marginTop: 10, border: '1 1 0 1' }}>
        <View style={styles.row}>
          <Text style={styles.rowHeading}>Customer Name: </Text>
          <Text>asdf</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowHeading}>Address: </Text>
          <Text>asdf</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.subRow}>
            <Text style={styles.rowHeading}>Contact No: </Text>
            <Text style={styles.rowSubHeading}>asdf</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={styles.rowHeading}>Birth Date: </Text>
            <Text style={styles.rowSubHeading}>asdf</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={styles.rowHeading}>Anniversary: </Text>
            <Text style={styles.rowSubHeading}>asdf</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.subRow}>
            <Text style={styles.rowHeading}>Job No: </Text>
            <Text style={styles.rowSubHeading}>asdf</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={styles.rowHeading}>GCNNo.: </Text>
            <Text style={styles.rowSubHeading}>asdf</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.subRow}>
            <Text style={styles.rowHeading}>Destination: </Text>
            <Text style={styles.rowSubHeading}>asdf</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={styles.rowHeading}>E-mail: </Text>
            <Text style={styles.rowSubHeading}>asdf</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 10, fontSize: 8 }}>
        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%' }} />
          <View
            style={{
              width: '40%',
              flexDirection: 'row',
            }}
          >
            <View style={styles.checkboxContainer}>
              <Text>Excellent</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Text>Good</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Text>Fair</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Text>Poor</Text>
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>
      </View>

      <View style={{ fontSize: 8 }}>
        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text>Would you recommended Ace Relocations to your friend.</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <Text style={{ marginVertical: 'auto' }}>Yes</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={{ marginVertical: 'auto' }}>No</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>
      </View>

      <View style={{ fontSize: 8 }}>
        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text>May we publish your opinion ?</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <Text style={{ marginVertical: 'auto' }}>Yes</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={{ marginVertical: 'auto' }}>No</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>
      </View>

      <View style={{ fontSize: 8 }}>
        <View style={styles.rowWithoutBorder}>
          <View>
            <Text>We will appreciate your valuable comments</Text>
          </View>
        </View>
        <View style={{ borderBottom: 1, marginTop: 20 }} />
        <View style={{ borderBottom: 1, marginTop: 20 }} />
        <View style={{ borderBottom: 1, marginTop: 20 }} />
        <View style={{ borderBottom: 1, marginTop: 20 }} />
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

      <View style={styles.footer}>
        <View style={{ border: 1, marginTop: 30 }} />
        <View style={{ border: '1 solid red', marginTop: '2px' }} />
      </View>
    </View>
  );
};

export default CustomerFeedbackForm;
