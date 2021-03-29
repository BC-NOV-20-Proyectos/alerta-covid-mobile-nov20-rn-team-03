import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import TitleLogIn from '../components/atoms/LogIn/TitleLogIn';
import InputLogIn from '../components/atoms/LogIn/InputLogIn';
import ButtonLogIn from '../components/atoms/LogIn/ButtonLogIn';
import CreateAccountText from '../components/atoms/LogIn/CreateAccountText';
import Backglround from '../components/atoms/LogIn/BackgroundLogin';
import {LogInConstants} from '../utils/Constants/LogInConstants';
import {styles} from '../styles/LogIn/index';


const LogIn = ({navigation}) => {


  return (
    <View style={styles.Background}>
      <Background></Background>
      <View style={styles.ContainerLogo}>
        <Image
          style={styles.Logo}
          source={require('../assets/images/Logo.png')}></Image>
      </View>
      <TitleLogIn></TitleLogIn>
      <View style={styles.containerForm}>
        <Text style={styles.TextInput}>{LogInConstants.Email}</Text>
        <InputLogIn iconName={'mail'} label={'email'} ></InputLogIn>
        <Text style={styles.TextInput}>{LogInConstants.Password}</Text>
        <InputLogIn
          iconName={'lock'}
          text={LogInConstants.forgotPassword} label={'password'}></InputLogIn>
      </View>
      <ButtonLogIn
        navigation={navigation}
        RouteGo={LogInConstants.HomeScreen}></ButtonLogIn>
      <CreateAccountText></CreateAccountText>
    </View>
  );
};

export default LogIn;
