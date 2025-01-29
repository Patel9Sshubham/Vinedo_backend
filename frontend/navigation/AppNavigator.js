// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/Auth/LoginScreen';
import LoginScreen2 from '../Screens/Auth/LoginScreen2';
import Register from '../Screens/Auth/Register';
import Profile from '../Screens/Profile/Profile';
import Profile4 from '../Screens/Profile/Profile4';
import Profile2 from '../Screens/Profile/Profile2';
import Profile3 from '../Screens/Profile/Profile3';
import Dashboard from '../Screens/Dashboard/Dashboard';
import EditProfileScreen from '../Screens/EditProfile/EditProfileScreen';
import EditName from '../Screens/EditProfile/EditName';
import EditUsername from '../Screens/EditProfile/EditUsername';
import Links from '../Screens/EditProfile/Links';
import UpdateBio from '../Screens/EditProfile/UpdateBio';
import Setyourprice from '../Screens/EditProfile/Setyourprice';
import Creatortools from '../Screens/EditProfile/Creatortools';
import Withdraw from '../Screens/EditProfile/Withdraw';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="loginscreen" component={LoginScreen2} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="profile2" component={Profile2} />
        <Stack.Screen name="profile3" component={Profile3} />
        <Stack.Screen name="profile4" component={Profile4} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="editprofilescreen" component={EditProfileScreen} />
        <Stack.Screen name="editname" component={EditName} />
        <Stack.Screen name="editusername" component={EditUsername} />
        <Stack.Screen name="links" component={Links} />
        <Stack.Screen name="updatebio" component={UpdateBio} />
        <Stack.Screen name="setyourprice" component={Setyourprice} />
        <Stack.Screen name="creatortools" component={Creatortools} />
        <Stack.Screen name="withdraw" component={Withdraw} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
