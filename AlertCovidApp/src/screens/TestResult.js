import React from 'react';
import {View, Text} from 'react-native';
import TapMenu from '../components/molecules/TapMenu';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import ButtonSave from '../components/atoms/GeneralApp/ButtonSecond';
import {GeneralConstants} from '../utils/Constants/GeneralConstants';
import ScrollWhite from '../components/atoms/GeneralApp/ScrollWhite';
import {styles} from '../styles/TestResult';

const TestResults = ({navigation}) => {
  return (
    <View style={styles.containerTestResult}>
      <Background></Background>
      <Title
        navigation={navigation}
        textTitle={GeneralConstants.testResultsTitle}
        RouteGo={'HomeScreen'}
      />
      <ScrollWhite />
      <ButtonSave
        navigation={navigation}
        RouteGo={'HistoryTest'}
        textButton={GeneralConstants.save}
      />
      <TapMenu navigation={navigation} IconSelected={'Home'}></TapMenu>
    </View>
  );
};

export default TestResults;
