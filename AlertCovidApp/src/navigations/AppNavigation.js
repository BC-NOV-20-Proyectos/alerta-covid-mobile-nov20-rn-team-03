import React from 'react'; 
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from "../screens/LogIn";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import HistoryTest from "../screens/HistoryTest";
import HistorySymptoms  from "../screens/HistorySymptoms";
import Symptoms from '../screens/Symptoms';
import TestResult from '../screens/TestResult';
import ScanQr from '../screens/ScanQr';
import InformationSymptoms from '../screens/InformationSymptoms';
import SevereSymptoms from '../screens/SevereSymptoms';
import CameraQR from '../screens/CameraQR'
import ForgotPassword from '../screens/ForgotPassword'

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
        <Stack.Screen name="HistorySymptoms" options={{headerShown: false}} component={HistorySymptoms}/>
        <Stack.Screen name="InformationSymptoms" options={{headerShown: false}} component={InformationSymptoms}/>
        <Stack.Screen name="SevereSymptoms" options={{headerShown: false}} component={SevereSymptoms}/>
        <Stack.Screen name="CameraQR" options={{headerShown: false}} component={CameraQR}/>
        <Stack.Screen name="ForgotPassword" options={{headerShown: false}} component={ForgotPassword}/>
      </Stack.Navigator>    
  );
}

export default AppNavigator;

