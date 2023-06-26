import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import Loaction from '../components/Location';
import Profile from '../components/Profile';
import Category from '../components/Category';
import categoryData from '../global/Data';

const Home = () => {
  // console.log(categoryData);
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      <View style={styles.header}>
        <Loaction />
        <Profile />
      </View>

      <SearchBar />
      <Category data={categoryData} />
      <Text>working</Text>
      {/* <Category /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
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
