import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOURS} from '../global/Css';
import GetLocation from 'react-native-get-location';
// import * as permissions from 'react-native-permissions';
// import {request, PERMISSIONS} from 'react-native-permissions';

GetLocation.getCurrentPosition({
  enableHighAccuracy: true,
  timeout: 60000,
})
  .then(location => {
    console.log(location);
  })
  .catch(error => {
    const {code, message} = error;
    console.warn(code, message);
  });
const Loaction = () => {
  return (
    <View>
      <Text style={styles.location}>Nayandahalli</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  location: {
    fontSize: 20,
    fontFamily: COLOURS.bold,
    color: COLOURS.darkPurple,
  },
});

export default Loaction;
