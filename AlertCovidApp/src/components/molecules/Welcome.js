import React from 'react';
import {View, Text} from 'react-native';
import Title from '../atoms/Welcome/Title';
import Navigation from '../atoms/Welcome/Navigation';

const Welcome = () => {
  return (
    <View>
      <Title></Title>
      <Navigation></Navigation>
    </View>
  );
};

export default Welcome;
