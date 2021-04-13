import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/Profile/index';
import {ProfileConstants} from '../../../utils/Constants/ProfileConstants';

const MyPlaces = () => {
  return (
    <View style={styles.MyPlaces}>
      <Text style={styles.MyPlacesText}>{ProfileConstants.MyPlaces}</Text>
      <Text style={styles.MyPlacesNumber}>{ProfileConstants.NumberOfPlaces}</Text>
    </View>
  );
};

export default MyPlaces;
