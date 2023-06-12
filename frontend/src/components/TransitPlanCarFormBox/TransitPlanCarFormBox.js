import React, { useEffect, useCallback, useState } from 'react';
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

const TransitPlanCarFormBox = ({ transitData }) => {

  const [isInsurance, updateIsInsurance] = useState(false);

  useEffect(() => {
    if (transitData ?.moneyInNumber != 0 ) {
      updateIsInsurance(true);
    } else {
      updateIsInsurance(false);
    }
  });


  return (
    <View style={{ border: 1, margin: '10 30', lineHeight: 2 }}>
      <View style={{ borderBottom: 1, marginVertical: 'auto', paddingTop: 6 }}>
        <Text style={{ textAlign: 'center', marginVertical: 'auto', fontWeight: 'bold' }}>
          CAR TRANSIT PROTECTION PLAN
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
              {!isInsurance ? 
              (
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
              {isInsurance ? (
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
              <Text style={styles.centerRow2}>{transitData ?.insuranceCarP}</Text>
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

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '10 5 0 5' }}>
            <Text>Terms & Conditions:</Text>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>1.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                The motorcar/vehicle will be repaired by ACE RELOCATIONS at their partner workshop only.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>2.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                In case the repair cost is more than 75% of the insured value then it will be considered as total loss and the insured value
                will be reimbursed on transferring the motorcar's ownership to ACE RELOCATIONS.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>3.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                Claim if any has to be immediately reported in writing on delivering the motor car/vehicle on its Goods Consignment Note
                4. We are not liable for the scratches on the outer body or the interior of the motorcar unless there is a relative dent/visible
                damage and the same has not been notified in the vehicle condition report on pickup.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>4.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                We are not liable for any mechanical failure/damage such as engine failure, clutch failure etc unless there is a relative
                physical damage to the outer body of the said motorcar.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>5.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                We are not liable for failure of any electronic component such as air conditioner, power window, central lock, etc unless
                there is a relative physical damage to the outer body of the said motorcar.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', fontSize: 7, lineHeight: 1.2, padding: '5 5 0 5' }}>
            <View style={{ width: '5%' }}>
              <Text>6.</Text>
            </View>
            <View style={{ width: '95%' }}>
              <Text>
                We are not responsible for loss/damage to any loose items kept inside the car such as pen drive, Cds, remote, etc
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
                  {isInsurance ? 'TWO' : 'ONE'}{' '}
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

export default TransitPlanCarFormBox;
