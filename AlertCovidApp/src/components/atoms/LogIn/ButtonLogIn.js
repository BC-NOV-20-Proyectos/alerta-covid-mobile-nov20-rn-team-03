import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/LogIn';
import {LogInConstants} from '../../../utils/Constants/LogInConstants';

const ButtonLogIn = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.ButtonLogIn} onPress={()=>{navigation.navigate('HomeScreen')}}>
      <Text style={styles.TextButton}>{LogInConstants.LogIn}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLogIn;
