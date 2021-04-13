import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Profile/index';

const LogOutButton = () => {
  return (
    <TouchableOpacity style={styles.LogOutButton}>
        <Text style={styles.LogOutButtonText}>Log Out</Text>
    </TouchableOpacity> 
  );
};

export default LogOutButton;
