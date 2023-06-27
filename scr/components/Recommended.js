import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
// import {RecommendedData} from '../global/Data';
import {COLOURS} from '../global/Css';
import {CheckCircleIcon, ClockIcon} from 'react-native-heroicons/solid';
const RecommendedData = [
  {
    id: 1,
    RestarentName: 'Burger King',
    item: 'Burger',
    time: '20-30 min',
    image: require('../assets/burger-hamburger-cheeseburger.jpg'),
  },
  {
    id: 2,
    RestarentName: 'Go Pizza',
    item: 'Pizza',
    time: '20-30 min',
    image: require('../assets/pizza.jpg'),
  },
  {
    id: 3,
    RestarentName: 'EatFit',
    item: 'Rice Bowl',
    time: '20-30 min',
    image: require('../assets/ricebowl.jpg'),
  },
  {
    id: 4,
    RestarentName: 'Anand Sweets',
    item: 'Kaju Barfi',
    time: '20-30 min',
    image: require('../assets/kaju.jpg'),
  },
];
const Recommended = () => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <Text style={styles.title}>Recommended For You</Text>
      {/* <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}> */}
      <FlatList
        style={styles.flatlist}
        data={RecommendedData}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <View style={styles.imgCard}>
                <Image style={styles.img} source={item.image} />
              </View>

              <View style={styles.restoContent}>
                <Text style={styles.resto}>{item.RestarentName}</Text>
                <Text style={styles.itemName}>{item.item}</Text>
                <View style={styles.flex}>
                  <View style={styles.item}>
                    {/* <ClockIcon size={15} color={'#aaa'} />
                     */}
                    <Image
                      source={require('../assets/icons8-clock-48.png')}
                      style={{
                        height: 15,
                        width: 15,
                        marginRight: 5,
                      }}
                    />
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    // flex: 1,
    width: 160,
    height: 100,
    elevation: 10,
    shadowColor: '#aaa',
    shadowOffset: {height: 2, width: 2},
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
    // marginRight: 15,
    marginHorizontal: 10,
    // alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  imgCard: {
    flexDirection: 'row',
  },
  resto: {
    fontSize: 14,
    fontFamily: COLOURS.medium,
    color: COLOURS.darkPurple,
    flexWrap: 'wrap',
  },
  restoContent: {
    flex: 1,
    // justifyContent: 'space-between',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: COLOURS.medium,
    color: COLOURS.darkPurple,
  },
  img: {
    width: 60,
    height: 100,
    left: -10,
    top: -10,
    borderRadius: 10,
  },
  flatlist: {
    // flex: 1,
  },
  item: {
    flexDirection: 'row',
  },
  itemName: {
    flex: 1,
    marginTop: -5,
    color: '#aaa',
    fontSize: 12,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
    color: '#aaa',
    fontWeight: '600',
  },
  flex: {
    justifyContent: 'flex-end',
  },
});

export default Recommended;
