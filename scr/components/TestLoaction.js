import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOURS} from '../global/Css';
import GetLocation from 'react-native-get-location';

const TestLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
        });
        setCurrentLocation(location);
      } catch (error) {
        console.warn(error.code, error.message);
      }
    };

    fetchLocation();
  }, []);

  return (
    <View>
      {currentLocation && (
        <Text style={styles.location}>
          Latitude: {currentLocation.latitude}
          {'\n'}
          Longitude: {currentLocation.longitude}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  location: {
    fontSize: 20,
    fontFamily: COLOURS.bold,
    color: COLOURS.darkPurple,
  },
});

export default TestLocation;
