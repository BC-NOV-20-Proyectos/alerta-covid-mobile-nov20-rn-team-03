import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from '../../styles';
const Image = require('../../assets/images/Welcome.png')

const BackgroundImage = () => {
  return (
    <View>
      <ImageBackground
        style={styles.ImageBackground}
        source={Image}></ImageBackground>
    </View>
  );
};

export default BackgroundImage;
