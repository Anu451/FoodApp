import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {COLOURS} from '../global/Css';
// import {Image} from 'react-native-svg';
const offerData = [
  {
    id: 1,
    title: 'Offers',
    tagline: '& More',
    img: require('../assets/Coin.gif'),
  },

  {
    id: 2,
    title: 'Legends',
    tagline: 'Gold exclusive',
    img: require('../assets/Coin.gif'),
  },

  {
    id: 3,
    title: 'Healty',
    tagline: 'Curated dishes',
    img: require('../assets/Coin.gif'),
  },
];
const Offers = () => {
  return (
    <View>
      <Text style={styles.offerTitle}>Offers Page </Text>
      <View style={styles.flatlist}>
        <FlatList
          data={offerData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.offerCard}>
                <View
                  style={{
                    justifyContent: 'center',
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image source={item.img} style={styles.img} />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.tagline}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerTitle: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    fontFamily: COLOURS.medium,
    color: COLOURS.darkPurple,
  },
  img: {
    width: 100,
    height: 100,
  },
  offerCard: {
    flexWrap: 'wrap',
    width: '50%',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {height: 5, width: 5},
    backgroundColor: 'white',
    borderRadius: 8,
  },
  flatlist: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 15,
    color: COLOURS.darkPurple,
    fontFamily: COLOURS.medium,
  },
});

export default Offers;
