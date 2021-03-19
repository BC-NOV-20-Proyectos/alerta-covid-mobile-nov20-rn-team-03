import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {styles} from '../../../styles/Home';
import {colors} from '../../../utils/Colors'

const ButtonLarge = ({navigation, RouteGo, textButton}) => {
  return (
    <TouchableOpacity 
    style={[styles.ButtonLarge, {backgroundColor: textButton === 'TEST RESULTS' ? colors.blue : colors.gray},]} 
    onPress={ () => navigation.navigate(RouteGo)
    }>
      <Icons  name="check" style={styles.IconQr} size={30}/>
      <Text style={styles.TextButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLarge;
