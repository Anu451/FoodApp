import {Image, Text, View} from 'react-native';
// import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

const Logo = () => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        marginTop: 20,
        marginLeft: 20,
      }}>
      <Text
        style={{
          fontSize: 25,
          color: '#1b2d37',
          fontFamily: 'Poppins-Bold',
        }}>
        FOODECA
      </Text>
    </View>
  );
};

export default Logo;
