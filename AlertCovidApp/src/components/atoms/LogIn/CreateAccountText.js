import React from 'react';
import {View, Text} from 'react-native';
import {LogInConstants} from '../../../utils/Constants/LogInConstants';
import {colors} from '../../../utils/Colors';
import {styles} from '../../../styles/LogIn';

const CreateAccountText = () => {
  return (
    <View>
      <Text>{LogInConstants.CreateAccount}</Text>
    </View>
  );
};

export default CreateAccountText;
