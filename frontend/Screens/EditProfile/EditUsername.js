import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Myinput from "../../Commoncomponent/Myinput/Myinput";
import SaveChangesButton from "../../Commoncomponent/Savechangesbutton/Savechangesbutton";
const EditUsername = () => {
  const navigation = useNavigation();
  const [username, setUserName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Username</Text>
      </View>
      <View style={styles.inputheight}>
        <Myinput
          label="Username"
          value={username}
          onChangeText={(text) => setUserName(text)}
          placeholder="Enter your Username"
          maxLength={30}
        />
        <Text style={styles.text}>
          Usernames can contain only letters, numbers, underscores, and periods.
          Changing you username will also change your profile link.
        </Text>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E2E44",
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: "100%",
    height: 50,
    marginVertical: 40,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  inputheight: {
    height: "50%",
  },
  text: {
    color: "#A1A3A7",
    paddingHorizontal: 10,
    fontSize: 10,
    fontWeight: 200,
  },
});
export default EditUsername;
