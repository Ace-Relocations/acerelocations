import React from "react";
import { Text, View } from "@react-pdf/renderer";

const AcknowledgementTable = ({ fullName, number }) => {
  return (
    <View
      style={{
        border: 1,
        width: "100%",
        fontSize: 7,
        color: "red",
        marginTop: "10px"
      }}
    >
      <Text style={{ fontSize: 11, borderBottom: 1 }}>ACKNOWLEDGEMENT</Text>
      <Text style={{ borderBottom: 1, height: "15px" }}>
        Recieved all the goods in good condition
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          borderBottom: 1,
          height: "12px"
        }}
      >
        <View style={{ width: "20%" }}>
          <Text>Name: </Text>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "flex-start",
            color: "black"
          }}
        >
          <Text>{fullName}</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          borderBottom: 1,
          height: "12px"
        }}
      >
        <View style={{ width: "20%" }}>
          <Text>No. :</Text>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "flex-start",
            color: "black"
          }}
        >
          <Text>{number}</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          borderBottom: 1,
          height: "12px"
        }}
      >
        <View style={{ width: "20%" }}>
          <Text>Sign.</Text>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "flex-start",
            color: "black"
          }}
        >
          <Text>S.R.P.</Text>
        </View>
      </View>
    </View>
  );
};

export default AcknowledgementTable;
