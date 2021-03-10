import React from 'react';
import {View, Text} from 'react-native';
import Title from '../atoms/Welcome/Title';
import Navigation from '../atoms/Welcome/Navigation';
import Button from '../atoms/Home/Button';

const Home = () => {
  return (
    <View>
      <Title></Title>
      <Button></Button>
      <Navigation></Navigation>
    </View>
  );
};

export default Home;
