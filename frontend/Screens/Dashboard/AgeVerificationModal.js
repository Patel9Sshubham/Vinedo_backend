import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

const AgeVerificationModal = ({ visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Are you 18 or older?</Text>
          <Text style={styles.modalMessage}>
            You must be 18 years old or older in order to access our app. Please
            verify your age.
          </Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.primaryButton} onPress={onClose}>
              <Text style={styles.buttonText}>I am over 18+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={onClose}>
              <Text style={styles.buttonText}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});

export default AgeVerificationModal;
