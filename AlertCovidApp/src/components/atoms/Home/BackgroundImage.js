import React from 'react';
import {ImageBackground} from 'react-native';
import { styles } from '../../../styles';

const BackgroundImage = () => {
  return (
     <ImageBackground style={styles.ImageBackground} source={require('../../../assets/images/Welcome.png')}></ImageBackground>
  );
};

export default BackgroundImage;
