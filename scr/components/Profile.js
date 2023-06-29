import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLOURS} from '../global/Css';
import {Bars3Icon} from 'react-native-heroicons/solid';

const Profile = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: COLOURS.darkPurple,
            borderRadius: 15,
            marginRight: 10,
          }}></View>
      </TouchableOpacity>

      {/* <Bars3Icon size={35} color={COLOURS.darkPurple} /> */}
    </View>
  );
};

export default Profile;
