import React from 'react';
import {View, ImageBackground} from 'react-native';
import { styles } from '../../../styles/LogIn/index';

const BackgroundImage = () => {
  return (
     <ImageBackground style={styles.ImageBackground} source={require('../../../assets/images/LogInBackground.png')}></ImageBackground>
  );
};

export default BackgroundImage;
