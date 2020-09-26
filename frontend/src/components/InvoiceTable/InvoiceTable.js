import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import FooterWithImage from '../FooterWithImage/FooterWithImage';

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
const InvoiceTable = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View style={{ width: '60%', border: 1, padding: 10, lineHeight: 1.2 }}>
          <View style={{ borderBottom: 1, height: 17 }}>
            <Text>Mr. AMOL GULKARI</Text>
          </View>
          <View style={{ borderBottom: 1, height: 17 }}>
            <Text></Text>
          </View>
          <View style={{ borderBottom: 1, height: 17 }}>
            <Text>TIRODA</Text>
          </View>
        </View>
        <View style={{ width: '1%' }} />
        <View style={{ width: '39%', border: 1, fontSize: 10 }}>
          <View style={{ flexDirection: 'row', margin: 'auto' }}>
            <Text>Invoice No.:</Text>
            <Text>12312</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 'auto' }}>
            <Text>Date:</Text>
            <Text>0310712020</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <View style={{ width: '60%', border: 1, padding: 10, lineHeight: 1.2 }}>
          <Text style={{ marginHorizontal: 'auto' }}>Description</Text>
        </View>
        <View style={{ width: '1%' }} />
        <View style={{ width: '39%', border: 1, fontSize: 10 }}>
          <Text style={{ marginHorizontal: 'auto' }}>Amount</Text>
          <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 10 }}>
            <Text style={{ textAlign: 'left' }}>Rs.</Text>
            <Text style={{ textAlign: 'right', right: 15 }}>Ps.</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 5, height: 300 }}>
        <View
          style={{
            width: '60%',
            border: 1,
            padding: 20,
            lineHeight: 1.2,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <Text style={{ textAlign: 'left' }}>LR No. 4208</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ textAlign: 'right' }}>Dated 0210712020</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignContent: 'center', marginVertical: 'auto' }}>
            <Text>
              Transportation charges inclusive of allied services for your Personal effects From
              Tiroda to Raipur 40096.00
            </Text>
          </View>
        </View>
        <View style={{ width: '1%' }} />
        <View style={{ width: '39%', border: 1, fontSize: 10 }}>
          <View style={{ flexDirection: 'row', alignContent: 'center', margin: 'auto' }}>
            <Text>40096.00</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <View
          style={{ width: '60%', border: 1, padding: 10, lineHeight: 1.2, flexDirection: 'row' }}
        >
          <View style={{ width: '70%' }}>
            <Text style={{ textAlign: 'left' }}>PAYMENT AT: AHMEDABAD</Text>
          </View>
          <View style={{ width: '30%' }}>
            <Text style={{ textAlign: 'right' }}>Total</Text>
          </View>
        </View>
        <View style={{ width: '1%' }} />
        <View style={{ width: '39%', border: 1, fontSize: 10, padding: 10 }}>
          <Text style={{ marginHorizontal: 'auto' }}>40096.00</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <View style={{ width: '60%', padding: 10, lineHeight: 1.2 }}>
          <Text style={{ textAlign: 'left' }}>Rupees in words: Forty Thousand Ninetysix Only.</Text>
        </View>
        <View style={{ width: '1%' }} />
        <View style={{ width: '39%', lineHeight: 1.2, padding: 10 }}>
          <Text style={{ marginHorizontal: 'auto' }}>Authorised Signatory</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 5, fontSize: 14 }}>
        <View style={{ width: '55%' }} />
        <View style={{ width: '6%', lineHeight: 1.2, padding: 10 }}>
          <View style={{ height: 50 }} />
          <Text style={{ textAlign: 'right' }}> FOR </Text>
        </View>
        <View style={{ width: '39%', lineHeight: 1.2, padding: 10 }}>
          <View style={{ height: 50 }} />
          <Text style={{ marginHorizontal: 'auto' }}>ACE RELOCATIONS</Text>
        </View>
      </View>

      <View style={{ marginTop: 5 }}>
        <View style={{ border: 1 }} />
        <View style={{ border: '1 solid red', marginTop: '2px' }} />
      </View>

      <FooterWithImage />
    </View>
  );
};

export default InvoiceTable;
