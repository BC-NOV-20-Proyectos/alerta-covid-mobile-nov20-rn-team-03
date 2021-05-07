import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Home';
import {colors} from '../../../utils/Colors';

const ButtonNext = ({navigation, RouteGo, textButton, click}) => {
  return (
    <TouchableOpacity
      style={[
        styles.ButtonWellBad,
        {
          backgroundColor:
            textButton === 'SAVE' ? colors.yellow : colors.blue,
          marginBottom: 10,
        },
      ]}
      onPress={() => navigation.navigate(RouteGo)}>
      <Text style={styles.TextButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default ButtonNext;
