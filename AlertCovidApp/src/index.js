import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigations/AppNavigation';


const index = () => {
  return (
    <NavigationContainer>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  );
};

export default index;
