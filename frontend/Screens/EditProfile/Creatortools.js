import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Creatortools = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Creator’s tools</Text>
      </View>

      <View style={styles.inputheight}>
        <View style={styles.balancecontainer}>
          <Text style={styles.text1}>Balance</Text>
          <Text style={styles.text2}>€ 12.04K</Text>
          <TouchableOpacity style={styles.withdraw} onPress={()=>navigation.navigate('withdraw')}>
            <Text style={styles.withdrawtext}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    paddingTop: 20,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 110,
  },

  inputheight: {
    height: "50%",
  },
  balancecontainer: {
    height: 234,
    width: 317,
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: "#292734",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    color: "#A1A3A7",
    marginBottom:10,
  },
  text2: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: 500,
  },
  withdraw: {
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#3632FF",
    width: 80,
    height: 21,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  withdrawtext: {
    color: "#FFFFFF",
    fontSize: 8,
  },
});

export default Creatortools;
