import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../../../styles/LogIn';
import Icon from 'react-native-vector-icons/Fontisto';

const InputLogIn = ({PlaceHolderText}) => {
  return (
    <View style={styles.Input}>  
      <TextInput placeholder={PlaceHolderText}></TextInput>
    </View>
  );
};

export default InputLogIn;
