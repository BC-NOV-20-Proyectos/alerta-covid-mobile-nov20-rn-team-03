import React from 'react';
import {ImageBackground} from 'react-native';
import {styles} from '../../../styles';
const Image = require('../../../assets/images/Welcome.png');

const BackgroundImage = () => {
  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={Image}></ImageBackground>
  );
};

export default BackgroundImage;
