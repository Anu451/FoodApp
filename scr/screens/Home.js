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
// import {categoryData, RecommendedData} from '../global/Data';

const Home = () => {
  // console.log(categoryData);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Loaction />
          <Profile />
        </View>

        <SearchBar />
        <Category data={categoryData} />
        <Carousel />
        <Recommended />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
