import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Home';
import {colors} from '../../../utils/Colors';

const Button = ({navigation, RouteGo, textButton, colorBackground}) => {
  return (
    <TouchableOpacity  
      style={[
        styles.ButtonWellBad,
        {backgroundColor: textButton === 'WELL' ? colors.green : colors.orange},
      ]}
      onPress={() => navigation.navigate(RouteGo)}>
      <Text style={styles.TextButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;
