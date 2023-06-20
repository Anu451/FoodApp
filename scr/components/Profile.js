import {Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLOURS} from '../global/Css';

const Profile = () => {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: COLOURS.darkPurple,
        borderRadius: 15,
      }}></View>
  );
};

export default Profile;
