import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import TitleLogIn from '../components/atoms/LogIn/TitleLogIn';
import InputLogIn from '../components/atoms/LogIn/InputLogIn';
import ButtonLogIn from '../components/atoms/LogIn/ButtonLogIn';
import CreateAccountText from '../components/atoms/LogIn/CreateAccountText';
import {LogInConstants} from '../utils/Constants/LogInConstants';
import {styles} from '../styles/LogIn/index'; 

const LogIn = ({navigation}) => {
  return (
    <View style={styles.Background}>
      <ImageBackground
        source={require('../assets/images/LogInBackground.png')}
        style={styles.ImageBackground}></ImageBackground>
      <View style={styles.ContainerLogo}>
        <Image
          style={styles.Logo}
          source={require('../assets/images/Logo.png')}></Image>
      </View>
      <TitleLogIn></TitleLogIn>
      <Text style={styles.TextInput}>{LogInConstants.Email}</Text>
      <InputLogIn PlaceHolderText={LogInConstants.Email}></InputLogIn>
      <Text style={styles.TextInput}>{LogInConstants.Password}</Text>
      <InputLogIn PlaceHolderText={LogInConstants.Password}></InputLogIn>
      <ButtonLogIn navigation={navigation} RouteGo= {LogInConstants.HistoryTest2}></ButtonLogIn>
      <CreateAccountText></CreateAccountText>
    </View>
  );
};

export default LogIn;
