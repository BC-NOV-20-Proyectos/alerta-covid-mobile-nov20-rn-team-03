import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import TitleLogIn from '../atoms/LogIn/TitleLogIn';
import InputLogIn from '../atoms/LogIn/InputLogIn';
import ButtonLogIn from '../atoms/LogIn/ButtonLogIn';
import CreateAccountText from '../atoms/LogIn/CreateAccountText';
import {LogInConstants} from '../../utils/Constants/LogInConstants';
import {styles} from '../../styles/LogIn'; 

const LogIn = () => {
  return (
    <View style={styles.Background}>
      <ImageBackground
        source={require('../../assets/images/LogInBackground.png')}
        style={styles.ImageBackground}></ImageBackground>
      <View style={styles.ContainerLogo}>
        <Image
          style={styles.Logo}
          source={require('../../assets/images/Logo.png')}></Image>
      </View>
      <TitleLogIn></TitleLogIn>
      <Text style={styles.TextInput}>{LogInConstants.Email}</Text>
      <InputLogIn PlaceHolderText={LogInConstants.Email}></InputLogIn>
      <Text style={styles.TextInput}>{LogInConstants.Password}</Text>
      <InputLogIn PlaceHolderText={LogInConstants.Password}></InputLogIn>
      <ButtonLogIn></ButtonLogIn>
      <CreateAccountText></CreateAccountText>
    </View>
  );
};

export default LogIn;
