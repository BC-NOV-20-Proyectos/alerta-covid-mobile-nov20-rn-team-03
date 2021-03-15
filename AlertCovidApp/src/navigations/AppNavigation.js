import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from "../screens/LogIn";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";


const Stack = createStackNavigator();

const AppNavigator = ()=>
{
  return(
      <Stack.Navigator screenOptions={{header: () => null}}>   
        <Stack.Screen name="LogIn" options={{headerShown: false}} component={LogIn}/>      
        <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen}/>                 
        <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile}/>                 
    
      </Stack.Navigator>    
  );
}

export default AppNavigator;

