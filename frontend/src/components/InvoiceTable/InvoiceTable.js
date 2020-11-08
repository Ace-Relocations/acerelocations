import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import FooterWithImage from '../FooterWithImage/FooterWithImage';
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
const InvoiceTable = ({ invoice }) => {
  const {
    name,
    dcity,
    invoiceNo,
    date,
    lrNo,
    invoiceDetails,
    total,
    totalInWords,
    paymentCity,
  } = invoice;
  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View style={{ width: '60%', border: 1, padding: 10, lineHeight: 1.2 }}>
          <View style={{ borderBottom: 1, height: 17 }}>
            <Text>{name}</Text>
          </View>
          <View style={{ borderBottom: 1, height: 17 }}>
            <Text></Text>
          </View>
          <View style={{ borderBottom: 1, height: 17 }}>
            <Text>{dcity}</Text>
          </View>
        </View>
        <View style={{ width: '1%' }} />
        <View style={{ width: '39%', border: 1, fontSize: 10 }}>
          <View style={{ flexDirection: 'row', margin: 'auto' }}>
            <Text>Invoice No.:</Text>
            <Text>{invoiceNo}</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 'auto' }}>
            <Text>Date:</Text>
            <Text>{date}</Text>
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
              <Text style={{ textAlign: 'left' }}>{`LR No. ${lrNo}`}</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ textAlign: 'right' }}>{`Dated ${date}`}</Text>
            </View>
          </View>

          {invoiceDetails.map(({ expense, amount }) => {
            if (!!amount) {
              return (
                <View style={{ flexDirection: 'row', alignContent: 'center', marginVertical: 'auto' }}>
                  <Text>{`${expense} ${amount}`}</Text>
                </View>
              )
            }
          })}
          {/* <View style={{ flexDirection: 'row', alignContent: 'center', marginVertical: 'auto' }}>
            <Text>
              Transportation charges inclusive of allied services for your Personal effects From
              Tiroda to Raipur 40096.00
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignContent: 'center', marginVertical: 'auto' }}>
            <Text>
              Transportation charges inclusive of allied services for your Personal effects From
              Tiroda to Raipur 40096.00
            </Text>
          </View> */}
        </View>
        <View style={{ width: '1%' }} />
        <View style={{ width: '39%', border: 1, fontSize: 10 }}>
          <View style={{ flexDirection: 'row', marginTop: '15px' }}></View>

          {invoiceDetails.map(({ amount }) => {
            if (!!amount) {
              return (
                <View style={{ flexDirection: 'row', alignContent: 'center', marginVertical: 'auto' }}>
                  <View style={{ flexDirection: 'row', alignContent: 'center', margin: 'auto' }}>
                    <Text>{amount}</Text>
                  </View>
                </View>
              )
            }
          })}
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <View
          style={{ width: '60%', border: 1, padding: 10, lineHeight: 1.2, flexDirection: 'row' }}
        >
          <View style={{ width: '70%' }}>
            <Text style={{ textAlign: 'left' }}>PAYMENT AT: {paymentCity}</Text>
          </View>
          <View style={{ width: '30%' }}>
            <Text style={{ textAlign: 'right' }}>Total</Text>
          </View>
        </View>
        <View style={{ width: '1%' }} />
        <View style={{ width: '39%', border: 1, fontSize: 10, padding: 10 }}>
          <Text style={{ marginHorizontal: 'auto' }}>{total}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 5, height: 100 }}>
        <View style={{ width: '60%', padding: 10, lineHeight: 1.2 }}>
          <Text style={{ textAlign: 'left' }}>{`Rupees in words: ${totalInWords}`}</Text>
        </View>
        <View style={{ width: '1%' }} />
        <View style={{ width: '39%', lineHeight: 1.2, padding: 10 }}>
          <Text style={{ marginHorizontal: 'auto' }}>Authorised Signatory</Text>
          <Image style={{ width: '50px', height: '50px', marginLeft: '60px' }} src={signImage} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 5, fontSize: 14 }}>
        <View style={{ width: '55%' }} />
        <View style={{ width: '6%', lineHeight: 1.2, padding: 10 }}>
          {/* <View style={{ height: 50 }} /> */}
          <Text style={{ textAlign: 'right' }}> FOR </Text>
        </View>
        <View style={{ width: '39%', lineHeight: 1.2, padding: 10 }}>
          {/* <View style={{ height: 50 }} /> */}
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
