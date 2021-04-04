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


const Symptoms = ({navigation}) => {
  return (
    <View>
      <BackgroundImage></BackgroundImage>
      <Title navigation={navigation} textTitle={SymptomsConstants.Symptoms} RouteGo={SymptomsConstants.homeScreen}></Title>
      <View style={styles.containerSymptoms}>
        <ButtonRoute navigation={navigation} textButton={SymptomsConstants.Bad} RouteGo={'Symptoms'} />
     
        <Card >
          <Card.Title>{SymptomsConstants.commonSymptoms}</Card.Title>
          <Card.Divider/>
          <Card.Image style={{borderRadius:0, width:280,height:90}} source={require('../assets/images/prevencionCovid.png')}>
          </Card.Image>
          <CheckboxSymptoms  Symptom={SymptomsConstants.fever} />
          <CheckboxSymptoms Symptom={SymptomsConstants.cough} />
          <CheckboxSymptoms Symptom={SymptomsConstants.fatigue} />
          <ButtonSecond navigation={navigation} RouteGo={'HistorySymptoms'} textButton={SymptomsConstants.next} />
        </Card>
  
        <TapMenu navigation={navigation} IconSelected={'Home'}/>

      </View>
    </View>
  );
};

export default Symptoms;
