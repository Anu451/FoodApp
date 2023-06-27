import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {categoryData} from '../global/Data';
import {COLOURS} from '../global/Css';
const Category = () => {
  const handelCategory = item => {
    // console.log(e);
    const targetCategory = item;
    console.log(targetCategory);
  };
  console.log('data', categoryData);
  const mapCategory = categoryData.map(item => {
    return (
      <View>
        <TouchableOpacity
          style={style.category}
          onPress={() => handelCategory(item.id)}
          key={item.id}>
          <Text
            style={{
              fontFamily: COLOURS.medium,
              fontSize: 12,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  });
  return (
    <ScrollView
      style={style.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
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
    // elevation: 10,
    // shadowColor: 'grey',
    // shadowOffset: 5,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#aaa',
    shadowOffset: 2,
    fontFamily: COLOURS.medium,
  },
});

export default Category;
