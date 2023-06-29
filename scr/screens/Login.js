import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Logo from '../components/Logo';
import {COLOURS} from '../global/Css';
import {UserIcon} from '@heroicons/react/outline';
import HomeScreen from './MoneyScreen';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [inputData, setInputData] = useState([]);
  const handelEmailChange = value => {
    setEmail(value);
  };
  const handelPasswordChange = value => {
    setPassword(value);
  };
  const handelInputData = () => {
    const data = {Email: email, Password: password};
    setInputData([data]);
    navigation.navigate('BottomNavigation');
  };
  console.log(email);
  console.log(password);
  console.log(inputData, 'input');
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          position: 'relative',
          backgroundColor: 'white',
        }}>
        {/* <View style={{alignItems: 'center'}}>
        <Logo />
      </View> */}
        <View style={styles.container}>
          <Text style={styles.sen1}>Get your food</Text>
          <Text style={styles.sen2}>Deliverd at your</Text>
          <Text style={styles.sen3}>Door step</Text>
          <View>
            <Text style={styles.caption}>
              We have 5000+ happy review and customers trust on our food and
              delivery service
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={{width: '95%', alignItems: 'center'}}>
              {/* <UserCircleIcon className="h-6 w-6 text-gray-500" /> */}
              {/* <UserIcon className="h-6 w-6 text-gray-500" /> */}
              <TextInput
                style={styles.inputField}
                placeholder="example@gmail.com"
                placeholderTextColor={COLOURS.darkPurple}
                value={email}
                onChangeText={handelEmailChange}
              />
            </View>

            <View style={{width: '95%', alignItems: 'center'}}>
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                placeholderTextColor={COLOURS.darkPurple}
                secureTextEntry={true}
                value={password}
                onChangeText={handelPasswordChange}
              />
            </View>
            {/* 
            <TouchableOpacity
              style={{width: '90%', alignItems: 'flex-end', padding: 5}}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={{color: 'blue', fontWeight: '600'}}>
                Don't have account ? Sign Up
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.loginBtn} onPress={handelInputData}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontFamily: 'Poppins-SemiBold',
                  alignSelf: 'center',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../assets/bg.jpg')} style={styles.bg} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    paddingTop: 25,
    color: COLOURS.darkPurple,
  },
  container: {
    // justifyContent: 'center',
    paddingTop: 20,
    marginHorizontal: 20,
  },
  sen1: {
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    color: COLOURS.lightPurple,
  },
  sen2: {
    marginTop: -10,
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: COLOURS.darkPurple,
  },
  sen3: {
    marginTop: -10,
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    color: COLOURS.lightPurple,
  },
  caption: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: COLOURS.btnColor,
    margin: 5,
  },
  bg: {
    width: 400,
    height: 400,
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
    // bottom: -80,
    opacity: 0.4,
  },
  inputContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 10,
    // elevation: 5,
  },
  inputField: {
    // alignSelf: 'center',
    width: '80%',
    backgroundColor: 'rgba(219, 127, 210, 0.3)',
    marginTop: 12,
    paddingLeft: 30,
    borderRadius: 20,
    // textAlign: 'center',
    fontWeight: '600',
    // alignItems: 'flex-start',
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: COLOURS.btnColor,
    width: 200,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 25,
  },
});
export default Login;
