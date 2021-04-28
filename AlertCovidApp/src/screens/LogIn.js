import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import TitleLogIn from '../components/atoms/LogIn/TitleLogIn';
import InputLogIn from '../components/atoms/LogIn/InputLogIn';
import ButtonLogIn from '../components/atoms/LogIn/ButtonLogIn';
import CreateAccountText from '../components/atoms/LogIn/CreateAccountText';
import Background from '../components/atoms/LogIn/BackgroundLogin';
import {LogInConstants} from '../utils/Constants/LogInConstants';
import {styles} from '../styles/LogIn/index';
import {useFormik} from 'formik';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIn = ({navigation}) => {
  const [formError, setFormError] = useState({});
  const {setFieldValue, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = 'Insert your Email';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid Email';
      } else {
        axios
          .post( LogInConstants.UrlLogin, {
            user: {
              email: values.email,
              password: values.password,
            },
          })
          .then(
            (response) => {
              var acceso = response.data.success;
              var userToken = response.headers.authorization;
              if (acceso === true) {
                navigation.navigate('HomeScreen');
                AsyncStorage.setItem('userToken', userToken);
              }
            },
            (error) => {
              Alert.alert('unregistered user!!');
            },
          );
      }
      if (!values.password) {
        errors.password = 'Insert your Password';
      }
      setFormError(errors);
    },
  });

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
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextInput}>{LogInConstants.Email}</Text>
          {formError.email && (
            <Text style={styles.errortext}>{formError.email}</Text>
          )}
        </View>
        <InputLogIn
          PlaceHolderText={'Email'}
          iconName={'mail'}
          label={'email'}
          setUserEmail={setFieldValue}></InputLogIn>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextInput}>{LogInConstants.Password}</Text>
          {formError.password && (
            <Text style={styles.errortext}>{formError.password}</Text>
          )}
        </View>

        <InputLogIn
          iconName={'lock'}
          PlaceHolderText={'Password'}
          text={LogInConstants.forgotPassword}
          navigation={navigation}
          label={'password'}
          setUserPass={setFieldValue}></InputLogIn>
      </View>

      <ButtonLogIn
        navigation={navigation}
        RouteGo={LogInConstants.HomeScreen}
        click={handleSubmit}></ButtonLogIn>
      <CreateAccountText></CreateAccountText>
    </View>
  );
};

export default LogIn;
