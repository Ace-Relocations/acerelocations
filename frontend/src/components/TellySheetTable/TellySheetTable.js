import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import Header from '../Header/Header';
import FooterWithImage from '../FooterWithImage/FooterWithImage';

// const rows = [];
// for (var i = 1; i <= 20; i++) {
//   rows.push(
//     <View style={{ width: '5%', borderRight: 1 }}>
//       <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>{i}</Text>
//     </View>,
//   );
// }

const getRows = (start, next) => {
  const rows = [];
  for (var i = start; i <= next; i++) {
    rows.push(
      <View style={{ width: '5%', borderRight: 1 }}>
        <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>{i}</Text>
      </View>,
    );
  }

  return rows;
};

const TellySheetTable = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(1, 20)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(21, 40)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(41, 60)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(61, 80)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(81, 100)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(101, 120)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(121, 140)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(141, 160)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(161, 180)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(181, 200)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(201, 220)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(221, 240)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(241, 260)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(261, 280)}
      </View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {getRows(281, 300)}
      </View>
    </View>
  );
};

export default TellySheetTable;
