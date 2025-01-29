import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileStats = () => {
  return (
    <View style={styles.stats}>
      <View style={styles.stat}>
        <Text style={styles.statNumber}>1,234</Text>
        <Text style={styles.statLabel}>Likes</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statNumber}>5,678</Text>
        <Text style={styles.statLabel}>Subscribers</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statNumber}>3.8</Text>
        <Text style={styles.statLabel}>Rating</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    stats: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginVertical: 15,
        paddingHorizontal: 60,
      },
      stat: {
        alignItems: "center",
      },
      statNumber: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
      },
      statLabel: {
        color: "#A1A1AA",
        fontSize: 14,
      },
});

export default ProfileStats;
