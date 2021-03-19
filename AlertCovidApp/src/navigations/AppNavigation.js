import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from "../screens/LogIn";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import HistoryTest from "../screens/HistoryTest";
import HistoryTest2 from "../screens/HistoryTest2";
import Symptoms from '../screens/Symptoms';
import TestResult from '../screens/TestResult';
import ScanQr from '../screens/ScanQr';
const Stack = createStackNavigator();

const AppNavigator = ()=>
{
  return(
      <Stack.Navigator screenOptions={{header: () => null}}>   
        <Stack.Screen name="LogIn" options={{headerShown: false}} component={LogIn}/>      
        <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen}/>                 
        <Stack.Screen name="Symptoms" options={{headerShown: false}} component={Symptoms}/>                 
        <Stack.Screen name="TestResult" options={{headerShown: false}} component={TestResult}/>                 
        <Stack.Screen name="ScanQr" options={{headerShown: false}} component={ScanQr}/>                 
        <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile}/>
        <Stack.Screen name="HistoryTest" options={{headerShown: false}} component={HistoryTest}/>
        <Stack.Screen name="HistoryTest2" options={{headerShown: false}} component={HistoryTest2}/>
      </Stack.Navigator>    
  );
}

export default AppNavigator;

