import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLOURS} from '../global/Css';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search Here"
        placeholderTextColor={COLOURS.darkPurple}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    elevation: 10,
    shadowColor: 'grey',
    shadowOffset: 5,
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    paddingLeft: 20,
    borderRadius: 20,
    marginTop: 10,
  },
});
export default SearchBar;
