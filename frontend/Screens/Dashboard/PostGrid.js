import React from "react";
import { View, Image, StyleSheet } from "react-native";

const PostGrid = ({ image }) => {
  return (
    <View style={styles.gridItem}>
      <Image source={image} style={styles.postImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 1,
  },
  postImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
});

export default PostGrid;
