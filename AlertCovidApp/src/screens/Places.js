import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TapMenu from '../components/molecules/TapMenu';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/TitleArrow'; 
import {GeneralConstants} from '../utils/Constants/GeneralConstants'; 
import {styles} from '../styles/TestResult';

const TestResults = ({navigation}) => {
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
            <Text>My places</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TapMenu navigation={navigation} IconSelected={'History'}></TapMenu>
    </View>
  );
};

export default TestResults;
