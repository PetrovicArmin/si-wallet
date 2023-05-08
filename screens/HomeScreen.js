import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import AccountBalance from "../components/AccountBalance";

const HomeScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <AccountBalance />
            <View style={styles.container2}>
                <Pressable
                    style={styles.listTemplatesButton}
                    onPress={() => navigation.navigate("Template List")}
                >
                    <Image
                        source={require("../assets/images/listTemplates.png")}
                        style={styles.buttonImage}
                    />
                </Pressable>
                <Pressable
                    style={styles.listTemplatesButton}
                    onPress={() => navigation.navigate("Voucher Reedem")}
                >
                    <Image
                        source={require("../assets/images/voucher.png")}
                        style={styles.buttonImage}
                    />
                </Pressable>
                <Pressable
                    style={styles.listTemplatesButton}
                    onPress={() => navigation.navigate("NewAccountCreation")}
                >
                    <Image
                        source={require("../assets/images/newbank.png")}
                        style={styles.bankImage}
                    />
                </Pressable>


            </View>

            <View style={styles.container1}>
                <View>


                    <Pressable
                        style={styles.payButton}
                        onPress={() => navigation.navigate("Transaction")}
                    >

            <Text style={styles.text}>PAY</Text>
          </Pressable>
          
    
        </View>
      </View>
      <View>

      <Pressable
            style={styles.requestButton}
            onPress={() => navigation.navigate("RequestedAccounts")}
          >
            <Text style={styles.text2}>REQUESTED ACCOUNTS</Text>
          </Pressable>

        <Pressable
          style={styles.myTransactionsButton}
          onPress={() => navigation.navigate("MyTransactions")}
        >
          <Text style={styles.text2}>MY TRANSACTIONS</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1938",
    alignItems: "center",
    justifyContent: "center",
    
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderRadius: 40,
    backgroundColor: "#312e66",
    padding: 50,
    width: "80%",
    
   
  },
  payButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 150,
    padding: 20,
    backgroundColor: "#FFC021",

    
  },
  requestButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 250,
    padding: 15,
    backgroundColor: "#FFC021",
    marginTop:70    
  },
  myTransactionsButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 250,
    padding: 15,
    backgroundColor: "#FFC021",
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  text2: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom:"80%",
      
  },
  listTemplatesButton: {
    padding: 13,
    
  },
  buttonImage: {
    width: 50,
    height: 50,
  },

    bankImage: {
        width: 55,
        height: 55,

    },

});

export default HomeScreen;
