import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Home';
import {colors} from '../../../utils/Colors'

const Button = ({navigation, RouteGo, textButton}) => {
  return (
    <TouchableOpacity 
    style={[styles.ButtonSquare, {backgroundColor: textButton === 'SCAN QR' ? colors.blue : colors.gray},]} 
    onPress={ () => navigation.navigate(RouteGo)
    }>
      <Text style={styles.TextButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;
