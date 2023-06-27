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
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Here"
        placeholderTextColor={COLOURS.darkPurple}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    elevation: 5,
    shadowColor: '#aaa',
    shadowOffset: 2,
    // shadowOpacity: 0.5,
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    paddingLeft: 20,
    borderRadius: 20,
    marginTop: 10,
    color: COLOURS.darkPurple,
    fontSize: 16,
    fontFamily: COLOURS.regular,
  },
});
export default SearchBar;
