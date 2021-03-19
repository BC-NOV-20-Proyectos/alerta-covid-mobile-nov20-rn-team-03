import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';  
import LogIn from './screens/LogIn'; 
import AppNavigator from './navigations/AppNavigation'
import InformationSymptomsScreen from './screens/InformationSymptoms';

const index = () => {
  return ( 
    <NavigationContainer>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  );
};

export default index;
