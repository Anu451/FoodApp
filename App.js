import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './scr/screens/Welcome';
import Login from './scr/screens/Login';
import SignUp from './scr/screens/SignUp';
// import HomeScreen from './scr/screens/MoneyScreen';
import HomeScreen from './scr/screens/HomeScreen';
import ProfileScreen from './scr/screens/ProfileScreen';
import AuthNavigation from './scr/navigation/AuthNavigation';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;
