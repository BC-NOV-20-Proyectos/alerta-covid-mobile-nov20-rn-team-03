import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from '../../styles';

const BackgroundImage = () => {
  return (
    <View>
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../assets/images/Welcome.png')}></ImageBackground>
    </View>
  );
};

export default BackgroundImage;
