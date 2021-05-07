import React from 'react';
import {View, Text,ScrollView} from 'react-native';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import ButtonRoute from '../components/atoms/GeneralApp/Button';
import ButtonSymptoms from '../components/atoms/Symptoms/ButtonSymptoms';
import ButtonNext from '../components/atoms/Symptoms/ButtonNext'
import TapMenu from '../components/molecules/TapMenu'
import {SymptomsConstants} from '../utils/Constants/SymptomsConstants';
import {styles} from '../styles/Symptoms'
import BackgroundImage from '../components/atoms/BackgroundImage';
import CheckboxSymptoms from '../components/atoms/Symptoms/CheckboxSymptoms';
import { Card,ListItem, Button, Icon} from 'react-native-elements';


const Symptoms = ({navigation}) => {
  return (
    <View>
      <BackgroundImage></BackgroundImage>
      <Title navigation={navigation} textTitle={SymptomsConstants.Symptoms} RouteGo={SymptomsConstants.homeScreen}></Title>
      <View style={styles.containerSymptoms}>
        <ButtonRoute navigation={navigation} textButton={SymptomsConstants.Bad} RouteGo={'Symptoms'} />
     
        <Card >
          <Card.Title>{SymptomsConstants.commonSymptoms}</Card.Title>
          <CheckboxSymptoms  Symptom={SymptomsConstants.fever} />
          <Card.Divider/>
          <CheckboxSymptoms Symptom={SymptomsConstants.cough} />
          <Card.Divider/>
          <CheckboxSymptoms Symptom={SymptomsConstants.fatigue} />
          <Card.Divider/>
          <CheckboxSymptoms Symptom={SymptomsConstants.sense} />
        </Card>
          <ButtonNext navigation={navigation} RouteGo={'SevereSymptoms'} textButton={SymptomsConstants.next} />
      
        <TapMenu navigation={navigation} IconSelected={'Home'}/>
      </View>
    </View>
  );
};

export default Symptoms;
