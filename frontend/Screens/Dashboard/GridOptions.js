import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Octicons } from "@expo/vector-icons";

const GridOptions = () => {
  return (
    <View style={styles.gridOptions}>
      <TouchableOpacity style={styles.logo}>
        <FontAwesome name="th" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Octicons name="video" size={24} color="#7B7B7B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    gridOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        paddingHorizontal: 100,
      },
      logo: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
      },
});

export default GridOptions;
