import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/login.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
        colors={[
          "rgba(0, 0, 0, 0.9)",
          "rgba(0.8, 0, 0.9, 0.6)",
          "rgba(0, 0, 0, 0.9)",
        ]}
        start={{ x: 6, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.logocontainer}>
          <Image
            source={require("../assets/logo/OBJECTS.png")}
            style={styles.smallImage}
          />
          <Text style={styles.backButtonText}>vinedo</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title}>
            Unleash Desire{"\n"}& Forge Instant{"\n"}Connections
          </Text>

          <Text style={styles.subtitle}>
            Unlock instant, passionate interactions effortlessly.
          </Text>
        </View>
        <View style={styles.container}>
          {/* Title with multiline and left alignment */}

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton2}>
              <Text style={styles.socialButtonText}>
                <FontAwesome name="facebook-f" size={24} color="black" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>
                <AntDesign name="google" size={24} color="black" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>
                <AntDesign name="apple1" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.separator} />
          </View>

          <TouchableOpacity
            style={styles.emailButton}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={styles.emailButtonText}>Sign up with email</Text>
          </TouchableOpacity>

          <Text
            style={styles.existingAccountText}
            onPress={() => navigation.navigate("loginscreen")}
          >
            Existing account? <Text style={styles.loginText}>Log in</Text>
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  container2: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 240,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    marginBottom: 20,
    lineHeight: 35,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "left",
    marginBottom: 40,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 80,
  },
  socialButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    margin: 5,
  },
  socialButton2: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    margin: 5,
  },
  socialButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
  },
  orText: {
    color: "#888",
    fontSize: 14,
    marginHorizontal: 10,
  },
  emailButton: {
    backgroundColor: "#3632FF",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  emailButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  existingAccountText: {
    fontSize: 16,
    color: "#fff",
  },
  loginText: {
    fontWeight: "bold",
  },
  logocontainer: {
    flexDirection: "row",
    position: "absolute",
    top: 5,
    left: 20,
    marginTop: 40,
  },
  smallImage: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  backButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
