import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Profile/index';

const ImageProfile = ({title, name}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.ImageProfile}></View>
      </TouchableOpacity>
      <View style={styles.HiContainer}>
        <Text style={styles.Hi}>{title}</Text>
        <Text style={styles.Hi}>{name}</Text>
      </View>
    </View>
  );
};

export default ImageProfile;
