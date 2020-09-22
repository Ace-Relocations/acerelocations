import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold"
  },
  addressLine: {
    color: "#000"
  },

  title: {
    color: "red",
    fontSize: 12
  }
});

const Boxwith4Line = ({ title, fullName, address }) => {
  return (
    <View style={{ border: 1, width: "100%" }}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}: </Text>
        <Text style={styles.addressLine}>{fullName}</Text>
      </View>
      {address.map(({ line }, index) => {
        return (
          <View style={styles.row} key={index}>
            <Text style={styles.addressLine}>{line}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Boxwith4Line;
