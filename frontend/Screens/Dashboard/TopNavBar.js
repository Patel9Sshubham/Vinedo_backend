import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const TopNavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity>
        <MaterialIcons name="menu" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="send" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#000",
    marginTop: 40,
    alignItems: "center",
  },
});

export default TopNavBar;
