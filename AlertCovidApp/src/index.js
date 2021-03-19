import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';  
import LogIn from './screens/LogIn';
import Symptoms from './screens/SymptomsScreen';
import AppNavigator from './navigations/AppNavigation'

const index = () => {
  return ( 
    //<NavigationContainer>
    //  <AppNavigator></AppNavigator>
    //</NavigationContainer>
    <Symptoms></Symptoms>
  );
};

export default index;
