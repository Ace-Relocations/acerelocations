import React from 'react';
import { Document, Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import Barcode from "react-hooks-barcode";
import Loader from '../Loader/Loader';
import QRCode from 'qrcode';
// import Barcode from 'react-barcode';

const styles = StyleSheet.create({
    headerText: {
        width: '50%',
        fontSize: 20,
        alignItems: 'flex-end',
        color: 'black',
        marginRight: 20,
      },
});

const Sticker = ({ data }) => {
  const {
    date, company, fromLocation, fromFloor, fromWing, department, empCode, empName, box, toLocation, toFloor, toWing, workstationNo
  } = data;

  let canvas;

  canvas = document.createElement('canvas');
  QRCode.toCanvas(canvas, empCode);
  const qr = canvas.toDataURL();

  return (
    <View>
              {/* <View style={styles.container} wrap={false}> */}
                
                  <Text style={styles.headerText}>Date: {date}</Text>
                
                
                  <Text style={styles.headerText}>Company: {company}</Text>
                
                
                  <Text style={styles.headerText}>From Location: {fromLocation}</Text>
                
                
                  <Text style={styles.headerText}>From Floor: {fromFloor}</Text>
                
                
                  <Text style={styles.headerText}>From Wing: {fromWing}</Text>
                
                
                  <Text style={styles.headerText}>Department: {department}</Text>
                
                
                  <Text style={styles.headerText}>Emp. Code: {empCode}</Text>
                
                
                  <Text style={styles.headerText}>Emp. Name: {empName}</Text>
                
                
                  <Text style={styles.headerText}>Box: {box}</Text>
                
                
                  <Text style={styles.headerText}>To Location: {toLocation}</Text>
                
                
                  <Text style={styles.headerText}>To Floor: {toFloor}</Text>
                
                
                  <Text style={styles.headerText}>To Wing: {toWing}</Text>
                
                
                  <Text style={styles.headerText}>Workstation No.: {workstationNo}</Text>
              
                  <View
                    style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'space-between',
                    margin: '9px auto',
                    }}
                >
                    <Image src={qr}/>
                </View>
                    

              
              </View>
  );
};

export default Sticker;
