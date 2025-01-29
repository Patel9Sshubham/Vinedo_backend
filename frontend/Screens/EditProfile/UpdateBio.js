import React from "react";
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

const UpdateBio = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bio</Text>
      </View>
            <View style={styles.inputheight}>
      
      <View style={styles.textAreaContainer}>
        <TextInput
          placeholder="Write your bio here..."
          placeholderTextColor="#888"
          style={styles.textArea}
          multiline={true} 
          numberOfLines={6} 
        />
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
  textAreaContainer: {
    backgroundColor: "#2E2E44",
    borderRadius: 15,
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textArea: {
    color: "#fff",
    fontSize: 16,
    height: 150, 
    textAlignVertical: "top", 
  },
  inputheight: {
    height: "50%",
  },
});

export default UpdateBio;
