import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
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
          source={require('../../assets/home/Avatar.png')} 
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

        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.inputText}>Name</Text>
          <Text style={styles.inputValue}>Ava Skyler</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.inputText}>Username</Text>
          <Text style={styles.inputValue}>@ava_skyler</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.inputText}>Bio</Text>
          <Text style={styles.inputValue}>Fashion lover 💄 | F...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.inputText}>Links</Text>
          <Text style={styles.inputValue}>Add</Text>
        </TouchableOpacity>

        <View style={styles.linkTextContainer}>
          <Text style={styles.linkText}>vinedo.com/@ava_skyler</Text>
          <MaterialIcons name="content-copy" size={18} color="#7B7B7B" />
        </View>
      </View>

      {/* Pricing & Wallet Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pricing & Wallet</Text>

        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.inputText}>Set Your Price</Text>
          <Text style={styles.inputValue}>Set The Price</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.inputText}>Creator’s Tool</Text>
          <Text style={styles.inputValue}>Earnings</Text>
        </TouchableOpacity>
      </View>
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
  paddingTop:20,
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
    fontSize: 14,
    fontWeight: "600",
  },
  linkTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
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
