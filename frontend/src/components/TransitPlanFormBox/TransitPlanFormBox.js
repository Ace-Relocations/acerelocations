import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  centerRow: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 'auto',
    paddingTop: 4,
  },
});

const TransitPlanFormBox = () => {
  return (
    <View style={{ border: 1, margin: '10 30', lineHeight: 2 }}>
      <View style={{ borderBottom: 1, marginVertical: 'auto', paddingTop: 6 }}>
        <Text style={{ textAlign: 'center', marginVertical: 'auto', fontWeight: 'bold' }}>
          TRANSIT PROTECTION PLAN
        </Text>
      </View>

      <View style={{ borderBottom: 1 }}>
        <View
          style={{ width: '100%', flexDirection: 'row', lineHeight: 2, padding: 5, fontSize: 8 }}
        >
          <View
            style={{
              width: '40%',
              flexDirection: 'row',
              textAlign: 'center',
              marginVertical: 'auto',
            }}
          >
            <View style={{ width: '30%', flexDirection: 'row' }}>
              <Text style={styles.centerRow}>Consignor</Text>
            </View>
            <View style={{ border: 1, width: '70%' }}>
              <Text style={styles.centerRow}>Mr. AMOL GULIGRI</Text>
            </View>
          </View>

          <View style={{ width: '30%', flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <Text style={styles.centerRow}>GCN No</Text>
            </View>
            <View style={{ border: 1, width: '60%' }}>
              <Text style={styles.centerRow}>4208</Text>
            </View>
          </View>

          <View style={{ width: '30%', flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <Text style={styles.centerRow}>Dated</Text>
            </View>
            <View style={{ border: 1, width: '60%' }}>
              <Text style={styles.centerRow}>02-07-20</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            lineHeight: 2,
            paddingLeft: 10,
            fontSize: 8,
            marginTop: 5,
          }}
        >
          <Text>Subject: </Text>
          <Text style={{ textDecoration: 'underline', fontSize: 7, marginLeft: 3 }}>
            Carrier riskcharges (FOV)for insuringtheconsignment underthe carriers act, 1865 &The
            carriage by road act,7007
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            paddingLeft: 10,
            paddingRight: 3,
            fontSize: 8,
            marginTop: 5,
            lineHeight: 1.2,
          }}
        >
          <Text>Dear Sir/Madam, </Text>
          <Text>
            It is mandatory to insure your consignment as per transport act. There are two options
            for insuring the consignment, the details for which are mentioned below. Kindlygothrough
            the same and selectanyone option.
          </Text>
        </View>
      </View>

      <View style={{ borderBottom: 1 }}>
        <View
          style={{ width: '100%', flexDirection: 'row', fontSize: 8, lineHeight: 1.2, padding: 5 }}
        >
          <View
            style={{
              width: '40%',
              flexDirection: 'row',
              textAlign: 'center',
              marginVertical: 'auto',
            }}
          >
            <View style={{ width: '30%', flexDirection: 'row' }}>
              <Text style={styles.centerRow}>Option One: </Text>
            </View>
            <View style={{ border: 1, width: '30%' }}>
              <Text style={styles.centerRow}></Text>
            </View>
            <View style={{ width: '60%', paddingTop: 5 }}>
              <Text> (tick here for acceptance)</Text>
            </View>
          </View>
        </View>

        <View
          style={{ width: '100%', flexDirection: 'row', fontSize: 8, lineHeight: 1.2, padding: 5 }}
        >
          <Text style={{ marginRight: 5 }}>
            Consignor intends to insure consignment by a third party insurance on his own, In case
            of any loss og damage the consignor / consignee will file a claim with the said third
            party insurance, payment due to the carrier i.e, Ace Relocations cannot be stopped or
            withheld.
          </Text>
        </View>
      </View>

      <View style={{ borderBottom: 1 }}>
        <View
          style={{ width: '100%', flexDirection: 'row', fontSize: 8, lineHeight: 1.2, padding: 5 }}
        >
          <View
            style={{
              width: '40%',
              flexDirection: 'row',
              textAlign: 'center',
              marginVertical: 'auto',
            }}
          >
            <View style={{ width: '30%', flexDirection: 'row' }}>
              <Text style={styles.centerRow}>Option Two: </Text>
            </View>
            <View style={{ border: 1, width: '30%' }}>
              <Text style={styles.centerRow}></Text>
            </View>
            <View style={{ width: '60%', paddingTop: 5 }}>
              <Text> (tick here for acceptance)</Text>
            </View>
          </View>
        </View>

        <View style={{ width: '100%', fontSize: 7, lineHeight: 1.2, padding: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginRight: 5 }}>
              The consignment is to be insuied under carriers risk scheme. Under this scheme you
              will be charged a premium of
            </Text>
            <View style={{ border: 1, width: 30, height: 10, marginTop: -5 }} />
          </View>
          <Text>
            of the consignrnent value declared by you. No separate insurance policy or premium
            receipt will be provided by us. You will have to declare individual value of each packed
            item of the consignrnent based on which the consignment will be insured Ace Relocations
            will take total responsibility for any loss/damage under this scheme and in the event of
            any claim following will be the mode of settlement subjecttoterms & conditions mentioned
            below.
          </Text>
        </View>

        <View style={{ lineHeight: 1.2 }}>
          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>1.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                The item will be repaired if repairable through Ace Relocations - partner vendor or
                its i'epa ir cost reimbursed.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>2.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                For all the item cannot be repaired or has been misplaced it will be replaced or its
                declared value reimbursed which ever is lesser.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransitPlanFormBox;
