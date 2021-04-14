import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ForgotPasswordConstants} from '../../../utils/Constants/ForgotPasswordConstants';
import {styles} from '../../../styles/ForgotPassword';

const ButtonLogIn = ({navigation, RouteGo, click}) => {
  return (
    <TouchableOpacity style={styles.ButtonForgot} onPress={click}>
      <Text style={styles.TextButton}>{ForgotPasswordConstants.reset}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLogIn;
