import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../styles/ForgotPassword';
import { ForgotPasswordConstants } from '../../../utils/Constants/ForgotPasswordConstants';

const ForgotPassword = () => {
  return (
    <View>
      <Text style={styles.TextTile}>{ForgotPasswordConstants.forgotPassword}</Text>
    </View>
  );
};

export default ForgotPassword;
