import React from "react";
import {
  Page,
  Document,
  Image,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";

import logo from "../logo.png";
import Boxwith4Line from "../components/BoxWith4Line/BoxWith4Line";
import BoxWith4LineKeys from "../components/BoxWith4LineKeys/BoxWith4LineKeys";
import CustomerPackageDesTable from "../components/CustomerPackageDesTable/CustomerPackageDesTable";
import ConsignmentBox from "../components/ConsignmentBox/ConsignmentBox";
import AcknowledgementTable from "../components/AcknowledgementTable/AcknowledgementTable";
import AffliationBox from "../components/AffliationBox/AffliationBox";

import InvoiceTitle from "./InvoiceTitle";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column"
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
    justifyContent: "space-between",
    borderBottom: 1,
    marginBottom: 10
  },
  logo: {
    width: 74,
    height: 66
    // let: 0
  },
  logo1: {
    width: 74,
    height: 66,
    alignItems: "center",
    margin: "0 auto"
  },
  headerText: {
    width: "50%",
    fontSize: 20,
    alignItems: "flex-end",
    color: "red",
    marginRight: 20
  },
  headerSubText: {
    marginTop: "10px",
    fontSize: 10,
    alignItems: "flex-end",
    width: "60%",
    color: "red",
    textAlign: "center"
    // jus
  },
  width90: {
    width: "90%",
    alignItems: "flex-end"
  },
  row: {
    flexDirection: "row",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold"
  },
  cognisor: {
    color: "#000"
  },
  cognisor1: {
    alignItems: "center"
  },
  box: {
    border: 1
  },
  title: {
    color: "red",
    fontSize: 12
  },
  title1: {
    color: "red",
    fontSize: 12,
    borderBottom: 1
  },
  width60: {
    width: "60%"
  },
  width70: {
    width: "70%"
  },
  width30: {
    width: "30%"
  },
  width50: {
    width: "50%"
  },
  description: {
    width: "75%",
    textAlign: "left",
    borderRightWidth: 1,
    paddingLeft: 8
  },
  qty: {
    width: "25%",
    textAlign: "right",
    paddingRight: 8
  }
});

const address = [
  { line: "6TH LANE,2ND CROSS BHAGYANAGAR" },
  { line: " KALYANDURGAM ROAD,ANANTAPUR," },
  { line: "ANDHRA PRADESH-515001" }
];

const Invoice = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page} orientation="landscape">
      <View>
        <View style={styles.container} wrap={false}>
          <Image style={styles.logo} src={logo} />
          <View wrap={false} style={styles.width90}>
            <Text style={styles.headerText}>We Make Moving Easy</Text>
            <Text style={styles.headerSubText}>
              6TH LANE,2ND CROSS BHAGYANAGAR, KALYANDURGAM ROAD,ANANTAPUR,
              ANDHRA PRADESH-515001
            </Text>
            <Text style={styles.headerSubText}>
              E: shaivpidadi@gmail.com W: www.shaivpidadi.com
            </Text>
          </View>
        </View>
        <View
          style={{
            height: "500px",
            flexDirection: "row",
            flexGrow: 1
          }}
        >
          <View
            style={{
              height: "400px",
              width: "70%"
            }}
          >
            <View
              style={{
                // border: 1,
                width: "100%",
                flexDirection: "row",
                marginBottom: "10px"
              }}
            >
              <View style={{ width: "70%" }}>
                <Boxwith4Line
                  title="Cognisor"
                  address={address}
                  fullName="Mr. MILAN SOLANKI"
                />
              </View>
              <View style={{ width: "30%", border: "1 1 1 0" }}>
                <BoxWith4LineKeys
                  gsnNo="2313"
                  date="12-10-3123"
                  from="Shaishav"
                  to="KnowOne"
                />
              </View>
            </View>
            <View style={{ marginBottom: "10px" }}>
              <Boxwith4Line
                title="Consignee"
                address={address}
                fullName="Mr. MILAN SOLANKI"
              />
            </View>

            <CustomerPackageDesTable
              description="This is very looooooooooooooooooooooooooooong Description"
              noOfPkg={10}
            />

            <View>
              <Text style={{ color: "red", fontSize: 7, marginLeft: 2 }}>
                Note : Corrugated boxes, PVC boxes, Fiber drums & Moving
                blankets are property of ACE Relocations
              </Text>
            </View>
          </View>
          <View
            style={{
              height: "400px",
              width: "30%",
              alignItems: "center",
              padding: 3
            }}
          >
            <Text style={styles.title}> CUSTOMER COPY</Text>
            <ConsignmentBox />
            <AcknowledgementTable fullName="Shaishav Pidadi" number="12" />
            <AffliationBox />
            <View style={{ marginTop: 5 }}>
              <Text style={{ color: "red", fontSize: 8 }}>
                Subject to Ahmedabad jurisdiction
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// const Invoice = ({ invoice }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <Image style={styles.logo} src={logo} />
//       <InvoiceTitle title="Ace Relocation" />
//       <InvoiceNo invoice={invoice} />
//       <BillTo invoice={invoice} />
//       <InvoiceItemsTable invoice={invoice} />
//       <InvoiceThankYouMsg />
//     </Page>
//   </Document>
// );

export default Invoice;
