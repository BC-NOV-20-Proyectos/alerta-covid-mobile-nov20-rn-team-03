import 'react-native-gesture-handler';
import React from 'react';

//Nvigation Imports//
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Coomponents//
import LogIn from "../screens/LogIn";
import HomeScreen from "../screens/HomeScreen";


const Stack = createStackNavigator();

const App = ()=>
{
  return(
    <NavigationContainer>
      <Stack.Navigator>   
      <Stack.Screen name="LogIn" options={{headerShown: false}} component={LogIn}/>      
      <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen}/>                 
      </Stack.Navigator>    
    </NavigationContainer>
  );
}

export default App;

