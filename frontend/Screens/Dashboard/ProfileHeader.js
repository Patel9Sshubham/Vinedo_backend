import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProfileStats from "./ProfileStats";
import { useNavigation } from "@react-navigation/native";
const ProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/home/Rectangle.png")}
        style={styles.coverImage}
      />
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../assets/home/Avatar.png")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.addIcon}>
            <FontAwesome name="plus" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Ava Skyler</Text>
        <Text style={styles.username}>@ava_skyler</Text>
        <ProfileStats />
      </View>
      <Text style={styles.bio}>
        Fashion lover 👗 | Foodie at heart 🍕 | Fitness enthusiast 💪 | Living
        life one day at a time 🌈 | Dream big, work hard, stay focused ✨
        <Text style={styles.hashtag}>#hashtag</Text>
      </Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editButton} onPress={()=> navigation.navigate('editprofilescreen')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#110E0F",
      },
      coverImage: {
        height: 200,
        width: "100%",
      },
      profileSection: {
        alignItems: "center",
        marginTop: -50,
      },
      profileImageContainer: {
        position: "relative",
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#1C1C2D",
      },
      addIcon: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#5663FF",
        borderRadius: 12.5,
        padding: 5,
      },
      profileName: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
      },
      username: {
        color: "#A1A1AA",
        fontSize: 14,
      },
      bio: {
        color: "#A1A1AA",
        fontSize: 14,
        textAlign: "center",
        marginVertical: 5,
        paddingHorizontal: 30,
      },
      hashtag: {
        color: "#3632FF", 
        fontWeight: "bold",
      },
      actionButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
      },
      editButton: {
        backgroundColor: "#5663FF",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 25,
      },
      shareButton: {
        backgroundColor: "#292734",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 25,
      },
      buttonText: {
        color: "white",
        fontWeight: "bold",
      },
});

export default ProfileHeader;
