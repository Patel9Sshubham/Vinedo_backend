import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SaveChangesButton from "../../Commoncomponent/Savechangesbutton/Savechangesbutton";

const Setyourprice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Set your price</Text>
      </View>

      <View style={styles.inputheight}>
        <View style={styles.inputContainer}>
          <View style={styles.inputColumn}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              placeholder="€"
              placeholderTextColor="#888"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.charCountContainer}>
            <Text style={styles.charCount}>/month</Text>
          </View>
        </View>
      </View>

    <SaveChangesButton />
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E2E44",
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginVertical: 40,
    justifyContent: "space-between",
  },
  inputColumn: {
    flex: 1,
    flexDirection: "column",
  },
  label: {
    color: "#888",
    fontSize: 14,
  },
  input: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 5,
  },
  charCountContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: 10,
  },
  charCount: {
    color: "#888",
    fontSize: 14,
  },
});

export default Setyourprice;
