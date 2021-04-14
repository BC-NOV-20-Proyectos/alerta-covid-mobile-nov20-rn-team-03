import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

const Image = require('../../../assets/images/ProfileBackground.png')

const Background = () => {
  return (
    <ImageBackground source={Image}></ImageBackground>
  );
};

export default Background;
