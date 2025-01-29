import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

const LoginScreen2 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="white" />

      </TouchableOpacity>
      <Text style={styles.title}>Log in to Vinedo</Text>
      <Text style={styles.subtitle}>
        Welcome back! Sign in using your social account or email to continue
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Email"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          style={styles.input}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <FontAwesome
            name={passwordVisible ? "eye-slash" : "eye"}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.separator} />
      </View>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
                          <FontAwesome name="facebook-f" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
                          <AntDesign name="google" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
                         <AntDesign name="apple1" size={24} color="black" />
         
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A2E",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 10,
    backgroundColor: "transparent",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E2E44",
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: "100%",
    height: 50,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#3632FF",
    paddingVertical: 12,
    paddingHorizontal: 140,
    borderRadius: 50,
    marginBottom: 20,
    marginVertical:40,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#888",
    fontSize: 14,
    marginBottom: 30,
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
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  socialButton: {
    backgroundColor: "white",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen2;
