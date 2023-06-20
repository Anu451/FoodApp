import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOURS} from '../global/Css';

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
