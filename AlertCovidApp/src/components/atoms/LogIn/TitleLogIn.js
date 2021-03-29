import React from 'react';
import {View, Text} from 'react-native';
import {LogInConstants} from '../../../utils/Constants/LogInConstants';
import {styles} from '../../../styles/LogIn';

const LogIn = () => {
  return (
    <View>
      <Text style={styles.TextTile}>{LogInConstants.LogIn}</Text>
    </View>
  );
};

export default LogIn;
