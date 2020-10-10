import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import Header from '../Header/Header';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
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
  logo: {
    width: 74,
    height: 66,
  },
  logo1: {
    width: 74,
    height: 66,
    alignItems: 'center',
    margin: '0 auto',
  },
  headerText: {
    width: '50%',
    fontSize: 20,
    alignItems: 'flex-end',
    color: 'red',
    marginRight: 20,
  },
  headerSubText: {
    marginTop: '10px',
    fontSize: 10,
    alignItems: 'flex-end',
    width: '60%',
    color: 'red',
    textAlign: 'center',
    // jus
  },
  width90: {
    width: '90%',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  cognisor: {
    color: '#000',
  },
  cognisor1: {
    alignItems: 'center',
  },
  box: {
    border: 1,
  },
  title: {
    color: 'red',
    fontSize: 12,
  },
  title1: {
    color: 'red',
    fontSize: 12,
    borderBottom: 1,
  },
  width60: {
    width: '60%',
  },
  width70: {
    width: '70%',
  },
  width30: {
    width: '30%',
  },
  width50: {
    width: '50%',
  },
  description: {
    width: '75%',
    textAlign: 'left',
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: '25%',
    textAlign: 'right',
    paddingRight: 8,
  },
});

const TellySheet = () => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <Header />
      </Page>
    </Document>
  );
};

export default TellySheet;
