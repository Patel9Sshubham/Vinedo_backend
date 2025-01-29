import React from 'react';
import { Text as DefaultText, StyleSheet } from 'react-native';

export const Text = ({ style, ...props }) => {
  return <DefaultText style={[styles.text, style]} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
  },
});
