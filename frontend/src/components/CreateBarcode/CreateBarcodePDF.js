import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Sticker from './Sticker';
import Button from '@material-ui/core/Button';

import Loader from '../Loader/Loader';

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
});

const CreateBarcodePDF = props => {
  const { date, company, fromLocation, fromFloor, fromWing, department, empCode, empName, box, toLocation, toFloor, toWing, workstationNo } =
    (props.location && props.location.state) || {};

return (
  <div>
    <div className="form-details">
        <div>
          <strong>Emp Name:</strong> {empName}
        </div>
        <div>
          <strong>Emp Code:</strong> {empCode}
        </div>
        <div>
          <strong>From Location:</strong> {fromLocation}
        </div>
        <div>
          <strong>To Location:</strong> {toLocation}
        </div>
      </div>

    <PDFDownloadLink
      document={
        <Document>
          <Page size='A4' style={styles.page} orientation='landscape'>
          <Sticker data={{date, company, fromLocation, fromFloor, fromWing, department, empCode, empName, box, toLocation, toFloor, toWing, workstationNo}}/>
          </Page>
        </Document>
      }
      fileName={`${empCode}_${empName}_${date}_barcode.pdf`}
    >
      {({ blob, url, loading, error }) =>
        loading ? <Loader/> : <Button>Download Now</Button>
      }
    </PDFDownloadLink>
    </div>

  );
};

export default CreateBarcodePDF;
