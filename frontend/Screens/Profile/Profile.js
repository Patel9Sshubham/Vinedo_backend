import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { Text } from "../../Commoncomponent/Text";
const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          source={require("../../assets/logo/OBJECTS.png")}
          style={styles.smallImage}
        />
        <Text style={styles.backButtonText}>vinedo</Text>
      </View>
      {/* Wrapper View for Title and Subtitle */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Set Up Your Profile</Text>
        <Text style={styles.subtitle}>
          Personalize your experience by creating a profile. Share your
          interests, add a photo, and let others get to know the real you.
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={[styles.dot2, styles.activeDot]} />
        <View style={[styles.dot, styles.inactiveDot]} />
        <View style={[styles.dot, styles.inactiveDot]} />
        <View style={[styles.dot, styles.inactiveDot]} />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("profile2")}
      >
        <Text style={styles.loginButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A2E",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 14,
  },
  logocontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginVertical: 40,
    justifyContent: "center",
  },
  smallImage: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  backButtonText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  textWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30, 
    marginBottom:100
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "400",
    textAlign: "center",
    marginHorizontal: 60,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dot2: {
    width: 20,
    height: 7,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#3632FF",
  },
  inactiveDot: {
    backgroundColor: "#52525B",
  },
  loginButton: {
    borderWidth: 1,
    borderColor: "#3632FF",
    width: "100%",
    height: 29,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 20,
    position:'absolute',
    bottom:40,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Profile;
