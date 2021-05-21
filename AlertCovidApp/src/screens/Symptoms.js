import React, {useState} from 'react';
import {View} from 'react-native';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import ButtonRoute from '../components/atoms/GeneralApp/Button';
import ButtonNext from '../components/atoms/Symptoms/ButtonNext'
import TapMenu from '../components/molecules/TapMenu'
import {SymptomsConstants} from '../utils/Constants/SymptomsConstants';
import {styles} from '../styles/Symptoms'
import BackgroundImage from '../components/atoms/BackgroundImage';
import CheckboxSymptoms from '../components/atoms/Symptoms/CheckboxSymptoms';
import {Card} from 'react-native-elements';
import {useFormik} from 'formik';


const Symptoms = ({navigation}) => {
  const [symptomsError, setSymptomsError] = useState({});
  const {setFieldValue, handleSubmit} = useFormik({
    initialValues: {
      fever: '',
      cough: '',
      fatigue: '',
      sense: ''
    },
    onSubmit: (values) => {
      let errors = {};

      if (!values.fever && !values.cough && !values.fatigue && !values.sense) {
        errors = 'Select a Symptoms';
        alert(errors);
      } else {
          navigation.navigate('SevereSymptoms', values);
          console.log(values);
      }
      setSymptomsError(errors);
    },
  }); 
    

  return (
    <View>
      <BackgroundImage></BackgroundImage>
      <Title navigation={navigation} textTitle={SymptomsConstants.Symptoms} RouteGo={SymptomsConstants.homeScreen}></Title>
      <View style={styles.containerSymptoms}>
        <ButtonRoute navigation={navigation} textButton={SymptomsConstants.Bad} RouteGo={'Symptoms'} />
     
        <Card >
          <Card.Title>{SymptomsConstants.commonSymptoms}</Card.Title>
          <CheckboxSymptoms  Symptom={SymptomsConstants.fever} setFever={setFieldValue} />
          <Card.Divider/>
          <CheckboxSymptoms Symptom={SymptomsConstants.cough} setCough={setFieldValue}/>
          <Card.Divider/>
          <CheckboxSymptoms Symptom={SymptomsConstants.fatigue} setFatigue={setFieldValue}/>
          <Card.Divider/>
          <CheckboxSymptoms Symptom={SymptomsConstants.sense} setSense={setFieldValue}/>
        </Card>
        
          <ButtonNext 
            click={handleSubmit} 
            textButton={SymptomsConstants.next} 
          />
      
        <TapMenu navigation={navigation} IconSelected={'Home'}/>
      </View>
    </View>
  );
};

export default Symptoms;
