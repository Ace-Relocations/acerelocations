import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import signImage from '../../assets/sign.jpg';
import checkMark from '../../assets/checkMark.png';

const styles = StyleSheet.create({
  centerRow: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 'auto',
    paddingTop: 4,
  },
  centerRow2: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 'auto',
  },
});

const TransitPlanFormBox = ({ transitData }) => {
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
              <Text style={styles.centerRow}>{transitData ?.fullName}</Text>
            </View>
          </View>

          <View style={{ width: '30%', flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <Text style={styles.centerRow}>GCN No</Text>
            </View>
            <View style={{ border: 1, width: '60%' }}>
              <Text style={styles.centerRow}>{transitData ?.gcnno ? transitData ?.gcnno : transitData ?.carGcnno}</Text>
            </View>
          </View>

          <View style={{ width: '30%', flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <Text style={styles.centerRow}>Dated</Text>
            </View>
            <View style={{ border: 1, width: '60%' }}>
              <Text style={styles.centerRow}>{transitData ?.date}</Text>
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
              {!!transitData ?.insuranceP && !transitData ?.insuranceA ? (
                <Image
                  style={{
                    width: '10px',
                    height: '10px',
                    marginVertical: 'auto',
                    marginLeft: '15px',
                  }}
                  src={checkMark}
                />
              ) : (
                  <Text style={styles.centerRow}></Text>
                )}
              {/* <Text style={styles.centerRow}></Text> */}
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
              {!transitData ?.insuranceP && !!transitData ?.insuranceA ? (
                <Image
                  style={{
                    width: '10px',
                    height: '10px',
                    marginVertical: 'auto',
                    marginLeft: '15px',
                  }}
                  src={checkMark}
                />
              ) : (
                  <Text style={styles.centerRow}></Text>
                )}
              {/* <Image style={{ width: '10px', height: '10px', marginVertical: 'auto', marginLeft: '15px' }} src={checkMark} /> */}
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
            <View style={{ border: 1, width: 30, marginTop: -5 }}>
              <Text style={styles.centerRow2}>{transitData ?.insuranceP}</Text>
            </View>
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

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '10 5 0 5' }}>
            <Text>Terms & Conditions:</Text>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>1.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                Claim if any has to be immediately reported in writing after unpacking the
                consignment on the Good Consignment Note
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>2.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                ln case of all items especially electrical & eiectronics, we are not liable for any
                internal malfunctioning or damages unless there is relative and visible external
                damage which is not mentioned in the packing/inventory list.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>3.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                ln case of furniture items we are not liable for scratches, polish worn out unless
                is relative visible damage to its outer packing and is said furniture
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>4.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                Claim for the entire set is not covered incase a single item(s) have been
                lostldmamaged. Such claim will be covered for an additional premium of 2% on
                confirmation by Ace Relocation in writing.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>5.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                lt also does not cover loss/damage of the goods packed by owner/conignor and / or
                jewellery/cash, deeds, traveller's cheque plants & pots, items made up of mud, clay
                and natural stone such as marble etc, gas cylinders, alcoholic beverages, contraband
                or other like items packed.
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: 'row', border: 1, height: 30, fontSize: 8 }}>
            <View style={{ width: '50%', flexDirection: 'row' }}>
              <View style={{ width: '30%', paddingTop: 5 }}>
                <Text style={{ margin: 'auto' }}>Option Selected</Text>
              </View>
              <View style={{ width: '15%', borderRight: 1, borderLeft: 1, paddingTop: 5 }}>
                <Text style={{ margin: 'auto' }}>
                  {' '}
                  {!!transitData ?.moneyInText && !!transitData ?.moneyInNumber ? 'TWO' : ''}{' '}
                </Text>
              </View>
              <View style={{ width: '65%', paddingTop: 5, textAlign: 'left', fontSize: 7 }}>
                <Text style={{ marginVertical: 'auto', fontSize: 7, marginLeft: 3 }}>
                  If opted for option "One" No
                </Text>
                <Text style={{ marginVertical: 'auto', fontSize: 7, marginLeft: 3 }}>
                  valuation to be mentioned below
                </Text>
              </View>
            </View>
            <View style={{ width: '50%', flexDirection: 'row' }}>
              <View style={{ borderLeft: 1, padding: 5 }}>
                <Text style={{ marginVertical: 'auto' }}>
                  I/we confirm & agree the above terms & conditions
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ fontSize: 7, flexDirection: 'row' }}>
          <View style={{ width: '50%', padding: 5, borderRight: 1 }}>
            <Text> Total valuation of consignment as per packing/ inventory list </Text>
            <View style={{ flexDirection: 'row', lineHeight: 2 }}>
              <View style={{ width: '20%' }}>
                <Text>In Figure:</Text>
              </View>
              <View style={{ width: '80%' }}>
                <View style={{ borderBottom: 1 }}>
                  <Text> Rs. {transitData ?.moneyInNumber} /- </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', lineHeight: 2, marginTop: 5 }}>
              <View style={{ width: '20%' }}>
                <Text>In Words:</Text>
              </View>
              <View style={{ width: '80%' }}>
                <View style={{ borderBottom: 1 }}>
                  <Text> {transitData ?.moneyInText} </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ width: '50%', flexDirection: 'row' }}>
            <View style={{ width: '40%', borderRight: 1 }}>
              <Text style={{ marginVertical: 'auto', height: '25px', borderBottom: 1 }}>
                Consignor's Signature
              </Text>
              <Text style={{ marginVertical: 'auto', height: '25px' }}>
                Authorised Signatory of Ace Relocations
              </Text>
            </View>
            <View style={{ width: '60%' }}>
              <Text style={{ marginVertical: 'auto', height: '25px', borderBottom: 1 }}> </Text>
              <Image
                style={{
                  width: '25px',
                  height: '25px',
                  marginVertical: 'auto',
                  marginLeft: '40px',
                }}
                src={signImage}
              />

              {/* <Text style={{ marginVertical: 'auto' }}> </Text> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransitPlanFormBox;
