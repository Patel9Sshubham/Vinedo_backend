import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import MyPost, { Myregister } from "../../Api";
import Loader from "../../Commoncomponent/Loader/Loader";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleregister = () => {
    if (!email || !password || !confirmPassword) {
      alert("Email, password, and confirm password are required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    const payload = {
      email,
      password,
    };

    Myregister("auth/sign-up", payload)
      .then((response) => {
        console.log("Register successful:", response);
        setLoading(false);
        navigation.navigate("loginscreen");
      })
      .catch((error) => {
        console.error("Register failed:", error);
        setLoading(false);
        setErrorMessage(error.message || "Register failed. Please try again.");
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Sign up with Email</Text>
      <Text style={styles.subtitle}>
        Start experiencing freedom today by signing up for our app!
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Email"
          placeholderTextColor="#A1A3A7"
          style={styles.input}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="User Name"
          placeholderTextColor="#A1A3A7"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#A1A3A7"
          style={styles.input}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <FontAwesome
            name={passwordVisible ? "eye-slash" : "eye"}
            size={20}
            color="#A1A3A7"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#A1A3A7"
          style={styles.input}
          secureTextEntry={!confirmPasswordVisible}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <FontAwesome
            name={confirmPasswordVisible ? "eye-slash" : "eye"}
            size={20}
            color="#A1A3A7"
          />
        </TouchableOpacity>
      </View>

      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.loginButton} onPress={handleregister}>
        <Text style={styles.loginButtonText}>Create an account</Text>
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
    paddingHorizontal: 40,
    fontWeight: 300,
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
    width: "100%",
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 20,
    marginVertical: 40,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#888",
    fontSize: 16,
    marginBottom: 30,
    fontWeight:500,
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

export default Register;
