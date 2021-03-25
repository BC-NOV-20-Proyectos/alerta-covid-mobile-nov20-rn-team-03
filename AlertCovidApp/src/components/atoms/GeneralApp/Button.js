import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {GeneralConstants} from '../../../utils/Constants/GeneralConstants';
import {styles} from '../../../styles/Home';
import {colors} from '../../../utils/Colors';

const Button = ({navigation, RouteGo, textButton}) => {
  const styleButton = {
    backgroundColor: textButton === GeneralConstants.well
      ? colors.green 
      : colors.orange,
  };

  return (
    <TouchableOpacity
      style={[styles.ButtonWellBad, styleButton]}
      onPress={() => navigation.navigate(RouteGo)}>
      <Text style={styles.TextButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;
