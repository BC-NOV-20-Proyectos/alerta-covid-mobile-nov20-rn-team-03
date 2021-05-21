import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import ButtonRoute from '../components/atoms/GeneralApp/Button';
import {Services} from '../utils/Constants/Services';
import ButtonSecond from '../components/atoms/GeneralApp/ButtonSecond'
import TapMenu from '../components/molecules/TapMenu'
import {SymptomsConstants} from '../utils/Constants/SymptomsConstants';
import {styles} from '../styles/Symptoms'
import BackgroundImage from '../components/atoms/BackgroundImage';
import CheckboxSymptoms from '../components/atoms/Symptoms/CheckboxSymptoms';
import {Card} from 'react-native-elements';
import {useFormik} from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SevereSymptoms = ({navigation, route}) => {
  const valuesSymptoms= route.params;
  const [userTokenSymptoms, setuserTokenSymptoms] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userToken').then((response) => {
      setuserTokenSymptoms(response);
    });
  });

  const [symptomsError, setSymptomsError] = useState({});
  const {setFieldValue, handleSubmit} = useFormik({
    initialValues: {
      fever: valuesSymptoms.fever,
      cough: valuesSymptoms.cough,
      fatigue: valuesSymptoms.fatigue,
      sense: valuesSymptoms.sense,
      breathing: '',
      Chest_pain: '',
      move: '',
      fingers: ''
    },
    onSubmit: (values) => {
      let errors = {};

      if (!values.breathing && !values.Chest_pain && !values.move && !values.fingers) {
        errors = 'Select a Symptoms';
        Alert.alert(errors);
      } else {

        axios
          .post(`${Services.UrlIncidents}`, {
            incident: {
              user_history_attributes: {
                  date: "2021/03/29",
                  user_history_details_attributes: [
                      {symptom_id: 1},
                      {symptom_id: 2},
                      {symptom_id: 3}
                  ]
              }
            },
          },
          {
            headers: {
              Authorization: userTokenSymptoms,
            },
          },
          )
          .then(
            (response) => {             
              console.log('symptoms registered')
            },
            (error) => {
              Alert.alert('unregistered symptoms!!');
            },
          );
        
          navigation.navigate('HistorySymptoms');
          console.log(values);
      }
      setSymptomsError(errors);
    },
  }); 
    


  return (
    <View>
      <BackgroundImage></BackgroundImage>
      <Title navigation={navigation} textTitle={SymptomsConstants.Symptoms} RouteGo={SymptomsConstants.Symptoms}></Title>
      <View style={styles.containerSymptoms}>
        <ButtonRoute navigation={navigation} textButton={SymptomsConstants.Bad} RouteGo={'Symptoms'} />
     
        <Card >
          <Card.Title>{SymptomsConstants.severeSymptoms}</Card.Title>
          <Card.Divider/>
          <CheckboxSymptoms  Symptom={SymptomsConstants.breathing} setBreathing={setFieldValue} />
    
          <CheckboxSymptoms Symptom={SymptomsConstants.Chest_pain} setChest_pain={setFieldValue}/>
         
          <CheckboxSymptoms Symptom={SymptomsConstants.move}  setmove={setFieldValue}/>
      
          <CheckboxSymptoms Symptom={SymptomsConstants.fingers} setfingers={setFieldValue}/>
        </Card>
          <ButtonSecond textButton={SymptomsConstants.save} click={handleSubmit}/>
      
        <TapMenu navigation={navigation} IconSelected={'Home'}/>
      </View>
    </View>
  );
};

export default SevereSymptoms;