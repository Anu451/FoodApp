import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  return (
    <View style={styles.carousel}>
      {/* <Text>Carousel </Text> */}
      <Swiper loop={true} autoplay={true} autoplayTimeout={3}>
        <View>
          <Image
            source={require('../assets/banner1.png')}
            style={styles.slider}
          />
        </View>
        <View>
          <Image
            source={require('../assets/banner2.png')}
            style={styles.slider}
          />
        </View>
        <View>
          <Image
            source={require('../assets/banner3.png')}
            style={styles.slider}
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    height: 200,
    width: '100%',
    borderRadius: 20,
  },
  slider: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
});
export default Carousel;
