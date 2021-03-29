import React from 'react';
import {View, Text} from 'react-native';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import Button from '../components/atoms/GeneralApp/Button';
import ButtonSymptoms from '../components/atoms/Symptoms/ButtonSymptoms';
import ButtonSecond from '../components/atoms/GeneralApp/ButtonSecond'
import TapMenu from '../components/molecules/TapMenu'
import {SymptomsConstants} from '../utils/Constants/SymptomsConstants';
import {styles} from '../styles/Symptoms'
import BackgroundImage from '../components/atoms/BackgroundImage';

const Symptoms = ({navigation}) => {
  return (
    <View>
      <BackgroundImage></BackgroundImage>
      <Title navigation={navigation} textTitle={SymptomsConstants.Symptoms} RouteGo={SymptomsConstants.homeScreen}></Title>
      <View style={styles.containerSymptoms}>
        <Button navigation={navigation} textButton={SymptomsConstants.Bad} RouteGo={'Symptoms'} />
        <View style={styles.containerButtons}>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.fever}/>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.cough}/>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.shortness}/>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.fever}/>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.cough}/>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.shortness}/>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.fever}/>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.cough}/>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.shortness}/>
          <ButtonSymptoms navigation={navigation} textButton={SymptomsConstants.fever}/>
        </View>

        <ButtonSecond navigation={navigation} RouteGo={'HistorySymptoms'} textButton={SymptomsConstants.save} />
        <TapMenu navigation={navigation} IconSelected={'Home'}/>


      </View>
    </View>
  );
};

export default Symptoms;
