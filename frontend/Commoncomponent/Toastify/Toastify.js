// Toastify.js
import React from 'react';
import Toast from 'react-native-toast-message';

const Toastify = ({ message, type }) => {
  const showToast = () => {
    Toast.show({
      type: type || 'success', 
      position: 'bottom', 
      text1: message,
    });
  };

  React.useEffect(() => {
    if (message) {
      showToast();
    }
  }, [message]);

  return null; 
};

export const showToast = (message, type = 'success') => {
  Toast.show({
    type: type, 
    position: 'bottom', 
    text1: message, 
  });
};

export default Toastify;
