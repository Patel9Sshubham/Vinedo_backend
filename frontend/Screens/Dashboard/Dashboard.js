import React, { useState } from "react";
import { View, StyleSheet, Modal, FlatList } from "react-native";
import TopNavBar from "./TopNavBar";
import ProfileHeader from "./ProfileHeader";
import GridOptions from "./GridOptions";
import AgeVerificationModal from "./AgeVerificationModal";
import PostGrid from "./PostGrid";
import PostsGrid from "./GridOptions";

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const posts = [
    { id: "1", image: require("../../assets/home/steve.png") },
    { id: "2", image: require("../../assets/home/Post2.png") },
    { id: "3", image: require("../../assets/home/Post3.png") },
    { id: "4", image: require("../../assets/home/Post2.png") },
    { id: "5", image: require("../../assets/home/Post3.png") },
    { id: "6", image: require("../../assets/home/steve.png") },
  ];

  const renderHeader = () => (
    <View>
      <TopNavBar />
      <ProfileHeader />
      <GridOptions />
    </View>
  );

  return (
    <View style={styles.container}>
      <AgeVerificationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <FlatList
        data={posts}
        numColumns={3}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostGrid image={item.image} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110E0F",
  },
});

export default Dashboard;
