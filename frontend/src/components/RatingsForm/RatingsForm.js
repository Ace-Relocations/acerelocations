import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    borderBottomWidth: '1 solid #000',
    width: '100%',
    fontSize: 8,
    height: 20,
    paddingTop: 3,
  },
  rowWithoutBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 8,
    marginTop: 5,
  },
  subRow: {
    width: '33%',
    display: 'flex',
    flexDirection: 'row',
  },
  subRow50: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
  },
  checkboxContainer: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    border: 1,
    width: '50%',
    height: 20,
  },
});

const RatingsForm = () => {
  return (
    <>
      <View style={{ marginTop: 10, fontSize: 8 }}>
        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%' }} />
          <View
            style={{
              width: '40%',
              flexDirection: 'row',
            }}
          >
            <View style={styles.checkboxContainer}>
              <Text>Excellent</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Text>Good</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Text>Fair</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Text>Poor</Text>
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>

        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ marginRight: 10 }}>1.</Text>
            <Text>Crew's Punctuality</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>
      </View>

      <View style={{ fontSize: 8 }}>
        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text>Would you recommended Ace Relocations to your friend.</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <Text style={{ marginVertical: 'auto' }}>Yes</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={{ marginVertical: 'auto' }}>No</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>
      </View>

      <View style={{ fontSize: 8 }}>
        <View style={styles.rowWithoutBorder}>
          <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text>May we publish your opinion ?</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row' }}>
            <View style={styles.checkboxContainer}>
              <Text style={{ marginVertical: 'auto' }}>Yes</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={{ marginVertical: 'auto' }}>No</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default RatingsForm;
