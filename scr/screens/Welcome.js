import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Logo from '../components/Logo';
import ButtonBlack from '../components/ButtonBlack';
import {COLOURS} from '../css/Global';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Welcome = ({navigation}) => {
  return (
    <View
      style={{
        fontFamily: 'Poppins-Medium',
        position: 'relative',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Image
        source={require('../assets/bg.jpg')}
        style={{
          width: 400,
          height: 400,
          position: 'absolute',
          // bottom: 0,
          // left: 50,
          top: -30,
          right: -50,
          justifyContent: 'center',
          alignSelf: 'center',
          transform: [{rotate: '180deg'}],
        }}
      />
      <Logo />

      <View
        style={{
          alignItems: 'center',
          // justifyContent: 'center',
          flex: 1,
          top: '50%',
        }}>
        <Text style={{fontWeight: '800', fontSize: 13, marginTop: 50}}>
          Choose Your Prefernces
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: COLOURS.lightPurple,
            fontWeight: '600',
            marginTop: 5,
          }}>
          What's your
        </Text>
        <Text
          style={{
            fontSize: 35,
            color: COLOURS.darkPurple,
            fontWeight: '600',
            marginTop: -12,
          }}>
          favourite food?
        </Text>
        {/* <ButtonBlack title={'Get Started'}  ></ButtonBlack> */}
        <TouchableOpacity
          style={{
            backgroundColor: COLOURS.btnColor,
            paddingHorizontal: 70,
            paddingVertical: 20,
            borderRadius: 30,
            marginTop: 30,
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{color: '#fff', fontSize: 13, fontWeight: 700}}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
