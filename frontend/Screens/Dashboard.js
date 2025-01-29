import React ,{useState}from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Modal
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Octicons from '@expo/vector-icons/Octicons';

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const posts = [
    { id: "1", image: "https://via.placeholder.com/150" },
    { id: "2", image: "https://via.placeholder.com/150" },
    { id: "3", image: "https://via.placeholder.com/150" },
    { id: "4", image: "https://via.placeholder.com/150" },
    { id: "5", image: "https://via.placeholder.com/150" },
    { id: "6", image: "https://via.placeholder.com/150" },
  ];

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/home/Rectangle.png')}
          style={styles.coverImage}
        />
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../assets/home/Avatar.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.addIcon}>
              <FontAwesome name="plus" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Ava Skyler</Text>
          <Text style={styles.username}>@ava_skyler</Text>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>1,234</Text>
              <Text style={styles.statLabel}>Likes</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>5,678</Text>
              <Text style={styles.statLabel}>Subscribers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>3.8</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>
        </View>
        <Text style={styles.bio}>
          Fashion lover 👗 | Foodie at heart 🍕 | Fitness enthusiast 💪 | Living
          life one day at a time 🌈 | Dream big, work hard, stay focused ✨
          #hashtag
        </Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.buttonText}>Share Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Photo Grid */}
      <View style={styles.photoGrid}>
        <View style={styles.gridOptions}>
          <TouchableOpacity style={styles.logo}>
            <FontAwesome name="th" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
          <Octicons name="video" size={24} color="#7B7B7B" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={posts}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image }} style={styles.postImage} />
          )}
        />
      </View>
      {/* Popup Modal */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Are you 18 or older?</Text>
            <Text style={styles.modalMessage}>
              You must be 18 years old or older in order to access our app. Please verify your age.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>I am over 18+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Exit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110E0F",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#000",
  },
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
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 15,
    paddingHorizontal:60,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#A1A1AA",
    fontSize: 14,
  },
  bio: {
    color: "#A1A1AA",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 5,
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
  photoGrid: {
    flex: 1,
    backgroundColor: "#110E0F",
    marginTop:10,
  },
  gridOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingHorizontal:100,
  },
  postImage: {
    width: "33.33%",
    height: 120,
    margin: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#2C2C3E",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 14,
    color: "#A1A1AA",
    textAlign: "center",
    marginBottom: 25,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#5663FF",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#34354A",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  logo:{
    borderBottomColor:'#FFFFFF',
    borderBottomWidth:1,
    width:35,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:3,
  }
});

export default Dashboard;
