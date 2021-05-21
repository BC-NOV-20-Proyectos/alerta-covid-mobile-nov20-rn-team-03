import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Home';
import {colors} from '../../../utils/Colors';

const Button = ({textButton, click}) => {
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
      onPress={click}>
      <Text style={styles.TextButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;
