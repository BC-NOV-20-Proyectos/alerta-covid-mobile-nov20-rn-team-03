import React from 'react';
import {View, Text,ScrollView} from 'react-native';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import ButtonRoute from '../components/atoms/GeneralApp/Button';
import ButtonSymptoms from '../components/atoms/Symptoms/ButtonSymptoms';
import ButtonSecond from '../components/atoms/GeneralApp/ButtonSecond'
import TapMenu from '../components/molecules/TapMenu'
import {SymptomsConstants} from '../utils/Constants/SymptomsConstants';
import {styles} from '../styles/Symptoms'
import BackgroundImage from '../components/atoms/BackgroundImage';
import CheckboxSymptoms from '../components/atoms/Symptoms/CheckboxSymptoms';
import { Card,ListItem, Button, Icon} from 'react-native-elements';


const SevereSymptoms = ({navigation}) => {
  return (
    <View>
      <BackgroundImage></BackgroundImage>
      <Title navigation={navigation} textTitle={SymptomsConstants.Symptoms} RouteGo={SymptomsConstants.Symptoms}></Title>
      <View style={styles.containerSymptoms}>
        <ButtonRoute navigation={navigation} textButton={SymptomsConstants.Bad} RouteGo={'Symptoms'} />
     
        <Card >
          <Card.Title>{SymptomsConstants.severeSymptoms}</Card.Title>
          <Card.Divider/>
          <CheckboxSymptoms  Symptom={SymptomsConstants.breathing} />
    
          <CheckboxSymptoms Symptom={SymptomsConstants.Chest_pain} />
         
          <CheckboxSymptoms Symptom={SymptomsConstants.move} />
      
          <CheckboxSymptoms Symptom={SymptomsConstants.fingers} />
        </Card>
          <ButtonSecond navigation={navigation} RouteGo={'HistorySymptoms'} textButton={SymptomsConstants.save} />
      
        <TapMenu navigation={navigation} IconSelected={'Home'}/>
      </View>
    </View>
  );
};

export default SevereSymptoms;