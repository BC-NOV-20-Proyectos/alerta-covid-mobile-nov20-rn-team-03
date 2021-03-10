import React from 'react';
import {View, Text, TextInput} from 'react-native'; 
import {styles} from '../../../styles/LogIn';

const InputLogIn = ({PlaceHolderText} ) => { 
  return ( 
    <View style={styles.Input}> 
      <TextInput placeholder={PlaceHolderText}></TextInput>
    </View>
  );
};

export default InputLogIn;
