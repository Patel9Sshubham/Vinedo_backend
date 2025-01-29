// EditName.js
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Myinput from "../../Commoncomponent/Myinput/Myinput";
import SaveChangesButton from "../../Commoncomponent/Savechangesbutton/Savechangesbutton";

const EditName = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Name</Text>
      </View>
      
      <View style={styles.inputheight}>
        <Myinput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
          maxLength={30}
        />
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
});

export default EditName;
