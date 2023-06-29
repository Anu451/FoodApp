import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import {RecommendedData} from '../global/Data';
import {COLOURS} from '../global/Css';
import {CheckCircleIcon, ClockIcon} from 'react-native-heroicons/solid';
const RecommendedData = [
  {
    id: 1,
    RestarentName: 'Burger King',
    item: 'Burger',
    time: '20-30 min',
    image: require('../assets/burger.jpg'),
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
    // <FlatList
    //   data={RecommendedData}
    //   keyExtractor={(item, idx) => idx}
    //   showsVerticalScrollIndicator={false}
    //   renderItem={({item}) => {
    //     return (
    //       <TouchableOpacity style={styles.container}>
    //         <Text>hi</Text>
    //       </TouchableOpacity>
    //     );
    //   }}
    // />
    <View style={{backgroundColor: '#fff'}}>
      <Text style={styles.title}>Recommended For You</Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <FlatList
          data={RecommendedData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                {/* <TouchableOpacity> */}
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
                {/* </TouchableOpacity> */}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: '91%',
    height: 100,
    elevation: 10,
    shadowColor: '#aaa',
    shadowOffset: {height: 2, width: 2},
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
    // marginRight: 15,
    // marginHorizontal: 10,
    // alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  imgCard: {
    flexDirection: 'row',
  },
  container: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    elevation: 5,
    paddingLeft: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginVertical: 10,
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
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
    // justifyContent
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
