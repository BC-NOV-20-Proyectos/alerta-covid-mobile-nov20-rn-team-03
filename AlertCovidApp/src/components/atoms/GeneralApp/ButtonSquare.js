import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconScan from 'react-native-vector-icons/FontAwesome';
import {styles} from '../../../styles/Home';
import {colors} from '../../../utils/Colors';

const Button = ({navigation, RouteGo, textButton}) => {
  return (
    <TouchableOpacity
      style={[
        styles.ButtonSquare,
        {backgroundColor: textButton === 'SCAN QR' ? colors.blue : colors.gray},
      ]}
      onPress={() => navigation.navigate(RouteGo)}>
      <IconScan name="qrcode" style={styles.IconQr} size={30} />
      <Text style={styles.TextButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;
