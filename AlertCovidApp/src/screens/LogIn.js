import React,{useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import TitleLogIn from '../components/atoms/LogIn/TitleLogIn';
import InputLogIn from '../components/atoms/LogIn/InputLogIn';
import ButtonLogIn from '../components/atoms/LogIn/ButtonLogIn';
import CreateAccountText from '../components/atoms/LogIn/CreateAccountText';
import Background from '../components/atoms/LogIn/BackgroundLogin';
import {LogInConstants} from '../utils/Constants/LogInConstants';
import {styles} from '../styles/LogIn/index';
import { useFormik } from 'formik';


const LogIn = ({navigation}) => {
  const [formError, setFormError] = useState({});
  const {values, isSubmitting, setFieldValue, handleSubmit, touched} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      //Aqui se hace la petición al endpoint de la API//
      console.log(values.email);
      console.log(values.password);
      
      //fetch('http://example.com/movies.json')
      //.then(response => response.json())
      //.then(data => console.log(data));
    },
    validate: values => {
      let errors = {};

      if (!values.email ) {
        errors.email = 'Insert your Email';
        
      }
      else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid Email';
      }
      else if( !values.password){
        errors.password='Insert your Password';
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
        <View style={{flexDirection:'row'}}> 
          <Text style={styles.TextInput}>{LogInConstants.Email}</Text>
          {formError.email  && (
              <Text  style={styles.errortext}>{formError.email}</Text>
            )}
        </View>
        <InputLogIn PlaceHolderText={'Email'} iconName={'mail'} label={'email'} setUserEmail={setFieldValue} ></InputLogIn>
      
    
       <View  style={{flexDirection:'row'}}> 
           <Text style={styles.TextInput}>{LogInConstants.Password}</Text>
           {formError.password  && (
            <Text  style={styles.errortext}>{formError.password}</Text>
          )}

       </View>
        
        <InputLogIn
          iconName={'lock'}
          PlaceHolderText={'Password'}
          text={LogInConstants.forgotPassword} label={'password'} setUserPass={setFieldValue}></InputLogIn>
     
      </View>
      <ButtonLogIn
        navigation={navigation}
        RouteGo={LogInConstants.HomeScreen}
        click={handleSubmit}>
        </ButtonLogIn>
      <CreateAccountText></CreateAccountText>
    </View>
  );
};

export default LogIn;
