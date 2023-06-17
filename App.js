import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Welcome from './scr/screens/Welcome';
import Login from './scr/screens/Login';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Welcome /> */}
      <Login />
    </SafeAreaView>
  );
};

export default App;
