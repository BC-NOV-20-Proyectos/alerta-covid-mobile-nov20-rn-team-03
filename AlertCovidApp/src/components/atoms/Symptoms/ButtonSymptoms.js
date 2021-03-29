import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {styles} from '../../../styles/Symptoms';
import {colors} from '../../../utils/Colors'

const ButtonSymptoms = ({textButton}) => {
  return (
    <TouchableOpacity 
    style={[styles.ButtonSymptoms, {backgroundColor: colors.grayLogo},]} >
      <Text style={styles.TextButton}>{textButton}</Text>
      <Icons  name="check" style={styles.IconQr} size={30}/>
    </TouchableOpacity>
  );
};

export default ButtonSymptoms;
