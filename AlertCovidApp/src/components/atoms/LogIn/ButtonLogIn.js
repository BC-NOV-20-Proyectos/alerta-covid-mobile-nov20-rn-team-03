import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/LogIn';
import {LogInConstants} from '../../../utils/Constants/LogInConstants';

const ButtonLogIn = ({click}) => {
  return (
    <TouchableOpacity style={styles.ButtonLogIn} onPress={click}>
      <Text style={styles.TextButton}>{LogInConstants.LogIn}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLogIn;
