import React from 'react';
import {View, Text} from 'react-native';
import Title from '../components/atoms/Title';
import {SymptomsConstants} from '../utils/Constants/SymptomsConstants';
import BackgroundImage from '../components/atoms/BackgroundImage';

const Symptoms = () => {
  return (
    <View>
      <BackgroundImage></BackgroundImage>
      <Title title={SymptomsConstants.Symptoms}/>
    </View>
  );
};

export default Symptoms;
