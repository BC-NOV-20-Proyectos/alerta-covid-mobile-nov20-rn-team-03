import React from 'react';
import {View, Text,Button} from 'react-native';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/Title';
import Button from '../components/atoms/GeneralApp/Button';
import ButtonLarge from '../components/atoms/GeneralApp/ButtonLarge';
import ButtonSquare from '../components/atoms/GeneralApp/ButtonSquare';
import TapMenu from '../components/molecules/TapMenu';
import {GeneralConstants} from '../utils/Constants/GeneralConstants';
import {styles} from '../styles/Home';
import axios from 'axios';

const HomeScreen = ({navigation, userToken}) => {
  console.log(userToken);

  logout: (userToken) => {
      axios.delete('/api/v1/logout', {
        "headers":{
        "authorization":userToken,                       
      }            
      })
      .then((response) => {         
      console.log(Good);       
      }, (error) => {
        Alert.alert("error!!")         
      });
    };



  return (
    <View style={styles.containerHome}>
      <Background></Background>
      <Title textTitle={GeneralConstants.youFeel}></Title>
      <View style={styles.containerCenter}>
        <View style={styles.containerButtons}>
          <Button
            navigation={navigation}
            RouteGo={'HistorySymptoms'}
            textButton={GeneralConstants.well}
          />
          <Button
            navigation={navigation}
            RouteGo={'Symptoms'}
            textButton={GeneralConstants.bad}
          />
        </View>
        <Text style={styles.titleCenter}>{GeneralConstants.tested}</Text>
        <ButtonLarge
          navigation={navigation}
          RouteGo={'TestResult'}
          textButton={GeneralConstants.testResults}
        />
        <Text style={styles.textKeep}>{GeneralConstants.keepFriends}</Text>
        <ButtonSquare
          navigation={navigation}
          RouteGo={'CameraQR'}
          textButton={GeneralConstants.scanQr}></ButtonSquare>
       
          <Button onPress={logout}>

        </Button>
      </View>
      <TapMenu navigation={navigation} IconSelected={'Home'} />
    </View>
  );
};

export default HomeScreen;
