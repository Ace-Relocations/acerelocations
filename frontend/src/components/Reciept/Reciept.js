import React from 'react';

import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';

import signImage from '../../assets/sign.jpg';

const styles = StyleSheet.create({
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

const Reciept = ({ reciept }) => {
  const {
    chequeIssuer,
    rupeesInNumber,
    rupeesInText,
    chequeNo,
    date,
    billNo,
    lrNo,
    carLrNo,
    from,
    to,
  } = reciept;
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '70%' }}>
          <Text>{`No: ${billNo}`}</Text>
        </View>
        <View style={{ width: '30%' }}>
          <Text>{`Date: ${new Date().toLocaleDateString()}`}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          lineHeight: 1.2,
          fontSize: 10,
          textAlign: 'justify',
          marginTop: 10,
          fontStretch: 'expanded',
          marginHorizontal: 5,
        }}
      >
        <Text>Received with thanks from</Text>
        <View
          style={{
            marginHorizontal: 10,
            width: 350,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
          }}
        >
          <Text>{chequeIssuer}</Text>
        </View>
        <Text>the sum of Rupees</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          lineHeight: 1.2,
          fontSize: 10,
          textAlign: 'justify',
          marginTop: 10,
          fontStretch: 'expanded',
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
            width: 470,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
            marginRight: 5,
          }}
        >
          <Text>{rupeesInText}</Text>
        </View>
        <Text>by cash or cheque</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          lineHeight: 1.2,
          fontSize: 10,
          textAlign: 'justify',
          marginTop: 10,
          fontStretch: 'expanded',
        }}
      >
        <Text>No.</Text>
        <View
          style={{
            marginHorizontal: 10,
            width: 120,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
            marginRight: 5,
          }}
        >
          <Text>{chequeNo}</Text>
        </View>

        <Text>Dated</Text>
        <View
          style={{
            marginHorizontal: 10,
            width: 80,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
            marginLeft: 5,
          }}
        >
          <Text>{date}</Text>
        </View>
        <Text>towards Bill No</Text>
        <View
          style={{
            marginHorizontal: 10,
            width: 110,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
            marginLeft: 5,
          }}
        >
          <Text>{billNo}</Text>
        </View>

        <Text>Dated</Text>
        <View
          style={{
            marginHorizontal: 10,
            width: 80,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
            marginLeft: 5,
          }}
        >
          <Text>{date}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          lineHeight: 1.2,
          fontSize: 10,
          textAlign: 'justify',
          marginTop: 10,
          fontStretch: 'expanded',
        }}
      >
        <Text style={{ marginRight: 15 }}>From</Text>
        <View
          style={{
            marginLeft: 10,
            width: 220,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
            marginRight: 60,
          }}
        >
          <Text>{from}</Text>
        </View>

        <Text>To</Text>
        <View
          style={{
            width: 220,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
            marginLeft: 15,
          }}
        >
          <Text>{to}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          lineHeight: 1.2,
          fontSize: 10,
          textAlign: 'justify',
          marginTop: 10,
          fontStretch: 'expanded',
        }}
      >
        <Text>L. R. No.</Text>
        <View
          style={{
            marginLeft: 10,
            width: 220,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
            marginRight: 45,
          }}
        >
          { carLrNo?
          <Text>{lrNo}, {carLrNo}</Text>:
          <Text>{lrNo}</Text>
          }
        </View>

        <Text>Dated</Text>
        <View
          style={{
            width: 220,
            borderBottom: 1,
            textAlign: 'center',
            borderBottomColor: '#000',
            marginLeft: 15,
          }}
        >
          <Text>{date}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 20, height: 30 }}>
        <View style={{ width: '50%', height: 30 }}>
          <View
            style={{
              width: '80%',
              border: 1,
              flexDirection: 'row',
              height: 30,
              textAlign: 'center',
            }}
          >
            <View
              style={{
                width: '30%',
                borderRight: 1,
                backgroundColor: '#000',
                textAlign: 'center',
              }}
            >
              <Text style={{ fontSize: 12, color: '#fff', marginVertical: 'auto' }}>Rs.</Text>
            </View>
            <View style={{ width: '70%', marginTop: '8px' }}>
              <Text>{rupeesInNumber}</Text>
            </View>
          </View>
        </View>

        <View style={{ width: '50%', height: 30, alignItems: 'flex-end' }}>
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              height: 30,
              textAlign: 'center',
            }}
          >
            <View
              style={{
                width: '30%',
                textAlign: 'center',
                alignContent: 'flex-end',
              }}
            >
              <Text style={{ fontSize: 12, marginVertical: 'auto' }}>Signature</Text>
            </View>
            <View style={{ width: '70%', border: 1 }}>
              <Image style={{ width: '25px', height: '25px', marginLeft: '60px' }} src={signImage} />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 30,
          backgroundColor: 'grey',
          marginTop: 30,
          marginHorizontal: -20,
          marginBottom: -20,
        }}
      />
    </View>
  );
};

export default Reciept;
