import React from 'react';
import {Text, View} from 'react-native';
import Logo from '../components/Logo';

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Logo />
      <Text>Log In</Text>
    </View>
  );
};

export default Login;
