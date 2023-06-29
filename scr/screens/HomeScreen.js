import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import Loaction from '../components/Location';
import Profile from '../components/Profile';
import Category from '../components/Category';
import categoryData from '../global/Data';
import NavBar from '../components/NavBar';
import {COLOURS} from '../global/Css';
import Recommended from '../components/Recommended';
import Carousel from '../components/Carousel';
import Offers from '../components/Offers';
import TestLocation from '../components/TestLoaction';
// import {categoryData, RecommendedData} from '../global/Data';

const Home = ({navigation}) => {
  // console.log(categoryData);
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Loaction />
          <Profile navigation={navigation} />
        </View>

        <SearchBar />
        <Category data={categoryData} />
        <Carousel />
        <Recommended />
        <TestLocation />
        {/* <Offers /> */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Home;
