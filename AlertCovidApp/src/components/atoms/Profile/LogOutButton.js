import React from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../../../styles/Profile/index';
import axios from 'axios';

const LogOutButton = ({myToken, navigation}) => {
  const logOut = () => {
    axios
      .delete('https://agile-river-63945.herokuapp.com/api/v1/logout', {
        headers: {
          Authorization: myToken,
        },
      })
      .then(
        (response) => {
          navigation.navigate('LogIn');
        },
        (error) => {
          Alert.alert('error!!');
        },
      );
  };

  return (
    <TouchableOpacity style={styles.LogOutButton} onPress={logOut}>
      <Text style={styles.LogOutButtonText}>Log Out</Text>
    </TouchableOpacity>
  );
};

export default LogOutButton;
