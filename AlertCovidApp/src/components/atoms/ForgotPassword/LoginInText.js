import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ForgotPasswordConstants} from '../../../utils/Constants/ForgotPasswordConstants';
import {styles} from '../../../styles/ForgotPassword';

const LoginInText = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
        <Text style={styles.LoginInText}>
          {ForgotPasswordConstants.LogIn}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginInText;
