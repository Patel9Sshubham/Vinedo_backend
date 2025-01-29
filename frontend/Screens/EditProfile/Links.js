import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import SaveChangesButton from "../../Commoncomponent/Savechangesbutton/Savechangesbutton";
const Links = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Links</Text>
      </View>

      {/* About You Section */}
      <View style={styles.section}>
        

        <TouchableOpacity
          style={styles.inputField}
         
        >
          <Text style={styles.inputText}>Instgram</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Add</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField} >
          <Text style={styles.inputText}>Facebook</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Add</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.inputText}>TikTok</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Add</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.inputText}>X</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Add</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.inputText}>OnlyFans</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Add</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>

      </View>
 <SaveChangesButton/>
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
    marginLeft: 90,
  },
  section: {
    marginBottom: 30,
    marginVertical:30,
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#292734",
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  inputText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  inputValue: {
    color: "#A1A3A7",
    fontSize: 13,
    fontWeight: "600",
  },
  gap: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 10,
    backgroundColor: "transparent",
    padding: 10,
  },
});

export default Links;
