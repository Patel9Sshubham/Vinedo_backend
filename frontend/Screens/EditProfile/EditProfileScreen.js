import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
const EditProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      {/* Profile Picture Section */}
      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/home/Avatar.png")}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.changePhotoButton}>
          <Ionicons name="add-circle" size={24} color="#007BFF" />
        </TouchableOpacity>
        <Text style={styles.changePhotoText}>Change Photo</Text>
      </View>

      {/* About You Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About You</Text>

        <TouchableOpacity
          style={styles.inputField}
          onPress={() => navigation.navigate("editname")}
        >
          <Text style={styles.inputText}>Name</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Ava Skyler</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField} onPress={()=>navigation.navigate('editusername')}>
          <Text style={styles.inputText}>Username</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>@ava_skyler</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField} onPress={()=>navigation.navigate('updatebio')}>
          <Text style={styles.inputText}>Bio</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Fashion lover 💄 | F...</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField} onPress={()=>navigation.navigate('links')}>
          <Text style={styles.inputText}>Links</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Add</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>

        <View style={styles.linkTextContainer}>
          <Text style={styles.linkText}>vinedo.com/@ava_skyler</Text>
          <MaterialIcons name="content-copy" size={18} color="#7B7B7B" />
        </View>
      </View>

      {/* Pricing & Wallet Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pricing & Wallet</Text>

        <TouchableOpacity style={styles.inputField} onPress={()=>navigation.navigate('setyourprice')}>
          <Text style={styles.inputText}>Set Your Price</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Set The Price</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField} onPress={()=>navigation.navigate('creatortools')}>
          <Text style={styles.inputText}>Creator’s Tool</Text>
          <View style={styles.gap}>
            <Text style={styles.inputValue}>Earnings</Text>
            <Entypo name="chevron-small-right" size={18} color="#A1A3A7" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changePhotoButton: {
    position: "absolute",
    right: 145,
    bottom: 30,
    backgroundColor: "white",
    borderRadius: 50,
  },
  changePhotoText: {
    color: "#7B7B7B",
    fontSize: 14,
    marginTop: 10,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
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
    color: "#7B7B7B",
    fontSize: 14,
  },
  inputValue: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  gap: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "flex-end",
  },
  linkText: {
    color: "#7B7B7B",
    fontSize: 14,
    marginRight: 5,
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

export default EditProfileScreen;
