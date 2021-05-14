import React,{useEffect,useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TapMenu from '../components/molecules/TapMenu';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/TitleArrow'; 
import {GeneralConstants} from '../utils/Constants/GeneralConstants'; 
import {styles} from '../styles/TestResult';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TestResults = ({navigation}) => {
  const [placesCode, setPlacesCode] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('placesCode').then((response) => {
      setPlacesCode(response);
    });
  });

  return (
    <View style={styles.containerTestResult}>
      <Background></Background>
      <Title
        navigation={navigation}
        textTitle={GeneralConstants.scanqr}
        RouteGo={'CameraQR'}
      />
      <View style={styles.containerPlaces}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.ContainerSymptoms}>
            <Text>{placesCode}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TapMenu navigation={navigation} IconSelected={'History'}></TapMenu>
    </View>
  );
};

export default TestResults;
