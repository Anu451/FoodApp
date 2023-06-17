import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Welcome from './scr/screens/Welcome';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Welcome />
    </SafeAreaView>
  );
};

export default App;
