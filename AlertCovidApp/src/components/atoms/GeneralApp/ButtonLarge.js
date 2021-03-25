import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {GeneralConstants} from '../../../utils/Constants/GeneralConstants';
import Icons from 'react-native-vector-icons/Feather';
import {styles} from '../../../styles/Home';
import {colors} from '../../../utils/Colors';

const ButtonLarge = ({navigation, RouteGo, textButton}) => {
  const styleButton = {
    backgroundColor:
      textButton === GeneralConstants.testResults 
      ? colors.blue 
      : colors.gray,
  };

  return (
    <TouchableOpacity
      style={[styles.ButtonLarge, styleButton]}
      onPress={() => navigation.navigate(RouteGo)}>
      <Icons name="check" style={styles.IconQr} size={30} />
      <Text style={styles.TextButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLarge;
