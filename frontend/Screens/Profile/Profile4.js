import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
const Profile4 = () => {
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

      {/* Title */}
      <Text style={styles.title}>Upload profile picture</Text>

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadButton}>
        <AntDesign name="plus" size={32} color="white" />
      </TouchableOpacity>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <View style={[styles.dot, styles.inactiveDot]} />
        <View style={[styles.dot, styles.inactiveDot]} />
        <View style={[styles.dot, styles.inactiveDot]} />
        <View style={[styles.dot2, styles.activeDot]} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forwardButton} onPress={()=> navigation.navigate('dashboard')}>
        <Feather name="play" size={24} color="#A1A3A7" />

        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C2D",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logocontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginVertical: 40,
    justifyContent:'center',
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 40,
  },
  uploadButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#34354A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position:'absolute',
    bottom:180,
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
  footer: {
    position: "absolute", 
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  skipText: {
    color: "#A1A3A7",
    fontSize: 16,
  },
  forwardButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor:'#A1A3A7',
    alignItems: "center",
    justifyContent: "center",
    borderWidth:1,
  },
});

export default Profile4;
