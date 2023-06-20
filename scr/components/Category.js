import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import categoryData from '../global/Data';
const Category = () => {
  console.log('data', categoryData);
  const mapCategory = categoryData.map(item => {
    return (
      <View>
        <TouchableOpacity>
          <Text style={style.category}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  });
  return (
    <ScrollView style={style.container} horizontal={true}>
      {mapCategory}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  category: {
    marginHorizontal: 5,
    paddingHorizontal: 20,
    marginVertical: 15,
    paddingVertical: 6,
    elevation: 10,
    // shadowColor: 'grey',
    // shadowOffset: 5,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});

export default Category;
