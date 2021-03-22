import React from 'react';
import {View, Text} from 'react-native';
import InformationSymptomsScreen from '../components/atoms/InformationSymptoms/InformationSymptoms';

const InformationSymptoms = ({navigation}) => {
  return (
    <View>
      <InformationSymptomsScreen
        navigation={navigation}></InformationSymptomsScreen>
    </View>
  );
};

export default InformationSymptoms;
