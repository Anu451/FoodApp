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

const Welcome = () => {
  return (
    <View
      style={{
        fontFamily: 'Poppins-Medium',
        position: 'relative',
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assets/bg.jpg')}
        style={{
          width: 400,
          height: 400,
          // position: 'absolute',
          // bottom: 0,
          // left: 50,
          top: -30,
          right: -50,
          justifyContent: 'center',
          alignSelf: 'center',
          transform: [{rotate: '180deg'}],
        }}
      />
      {/* <Logo /> */}
      <Image
        source={require('../assets/logo2.png')}
        style={{
          width: 150,
          height: 150,
          top: -20,
          left: -20,
          position: 'absolute',
        }}></Image>

      <Text style={{fontWeight: '800', fontSize: 13, marginTop: 50}}>
        Choose Your Prefernces
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: '#db7fd2',
          fontWeight: '600',
          marginTop: 5,
        }}>
        What's your
      </Text>
      <Text
        style={{
          fontSize: 35,
          color: '#663063',
          fontWeight: '600',
          marginTop: -12,
        }}>
        favourite food?
      </Text>
      {/* <ButtonBlack title={'Get Started'}  ></ButtonBlack> */}
      <TouchableOpacity
        style={{
          backgroundColor: '#1b2d37',
          paddingHorizontal: 70,
          paddingVertical: 20,
          borderRadius: 30,
          marginTop: 30,
        }}>
        <Text style={{color: '#fff', fontSize: 13, fontWeight: 700}}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
