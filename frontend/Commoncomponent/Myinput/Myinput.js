// CustomTextInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { FloatingLabelInput } from 'react-native-floating-label-input';
const Myinput = ({ label, value, onChangeText, placeholder, maxLength }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputColumn}>
        {/* <Text style={styles.label}>{label}</Text> */}
        <FloatingLabelInput
          placeholder={placeholder}
          label={label}
          placeholderTextColor="#888"
          containerStyles={styles.input}
          maxLength={maxLength}
          value={value}
          onChangeText={onChangeText}
          customLabelStyles={{
            colorFocused: '#A1A3A7', 
            colorBlurred: '#A1A3A7',
            fontSizeFocused:12,
            fontSizeBlurred:12,
          
          }}
          inputStyles={styles.inputText}
        />
      </View>
      <View style={styles.charCountContainer}>
        <Text style={styles.charCount}>{`${value.length || 0}/${maxLength || 30}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E2E44",
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginVertical: 40,
    justifyContent: "space-between",
  },
  inputColumn: {
    flex: 1,
    flexDirection: "column",
  },
  label: {
    color: "#A1A3A7",
    fontSize: 14,
  },
  input: {
    color: "#fff",
    fontSize: 16,
    height:51,
    borderWidth: 0, 
    backgroundColor: 'transparent',
  },
  charCountContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: 10,
  },
  charCount: {
    color: "#888",
    fontSize: 14,
  },
  inputText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
});

export default Myinput;
