import React from "react";
import { Image, Text, View, StyleSheet } from "@react-pdf/renderer";
import logo from "../../logo.png";

const styles = StyleSheet.create({
  logo1: {
    width: 74,
    height: 66,
    alignItems: "center",
    margin: "0 auto"
  }
});

const AffliationBox = () => {
  return (
    <View
      style={{
        border: 1,
        width: "100%",
        fontSize: 7,
        color: "red",
        marginTop: "10px",
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: 11, textAlign: "center" }}>AFFILIATION</Text>
      <View
        style={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          margin: "10px auto"
        }}
      >
        <Image style={styles.logo1} src={logo} />
      </View>
      <Text style={{ fontSize: 8, borderBottom: 1, textAlign: "center" }}>
        Serving Pan India and Overseas
      </Text>
    </View>
  );
};

export default AffliationBox;
