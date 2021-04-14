import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import TitlePassword from '../components/atoms/ForgotPassword/TitleForgotPassword';
import {ForgotPasswordConstants} from '../utils/Constants/ForgotPasswordConstants';
import {styles} from '../styles/ForgotPassword/index';
import {useFormik} from 'formik';
import LoginInText from '../components/atoms/ForgotPassword/LoginInText';
import ButtonForgot from '../components/atoms/ForgotPassword/ButtonForgot';
import InputForgotPassword from '../components/atoms/ForgotPassword/InputForgotPassword';
import Background from '../components/atoms/LogIn/BackgroundLogin';


  const ForgotPassword = ({navigation}) => {
  const [formError, setFormError] = useState({});

  const {
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = 'Insert your Email';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid Email';
      }
        else{
         Alert.alert('Sended email for update');
        }
      setFormError(errors);
    },
  });

  return (
    <View style={styles.Background}>
      <Background></Background>

      <TitlePassword></TitlePassword>

      <View style={styles.containerForm}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextInput}>{ForgotPasswordConstants.Email}</Text>
          {formError.email && (
            <Text style={styles.errortext}>{formError.email}</Text>
          )}
        </View>

        <InputForgotPassword
          PlaceHolderText={'Email'}
          iconName={'mail'}
          label={'email'}
          setUserEmail={setFieldValue}></InputForgotPassword>
  
      </View>

      <ButtonForgot
        navigation={navigation}
        click={handleSubmit}></ButtonForgot>

      <LoginInText navigation={navigation} ></LoginInText>

    </View>
  );
};

export default ForgotPassword;
