import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import TapMenu from '../components/molecules/TapMenu';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import {GeneralConstants} from '../utils/Constants/GeneralConstants';
import {styles} from '../styles/TestResult';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const CameraQR = ({navigation}) => {
  const [userTokenCamera, setuserTokenCamera] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userToken').then((response) => {
      setuserTokenCamera(response);
    });
  });

  const onSuccess = (e) => {
    const dataQr = e.data;

    axios
      .post(
        `${GeneralConstants.urlPlaces}`,
        {
          place_history: {
            id: dataQr,
          },
        },
        {
          headers: {
            Authorization: userTokenCamera,
          },
        },
      )
      .then(
        (response) => {
          let arrayPlaces = [];

          for (let i = 0; i < response.data.length; i++) {
            for (let j = 0; j < response.data[j].length; j++) {
              if (j === 1) {
                arrayPlaces.push(response.data[i][j]);
              }
            }
          }
          navigation.navigate('Places', {arrayData: arrayPlaces});
        },
        (error) => {
          alert('Code not registered!!');
        },
      );
  };

  return (
    <View style={styles.containerMainQR}>
      <Background></Background>
      <Title
        navigation={navigation}
        textTitle={GeneralConstants.QRtitle}
        RouteGo={'HomeScreen'}
      />

      <View style={styles.containerQR}>
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          fadeIn={false}></QRCodeScanner>
      </View>
      <TapMenu navigation={navigation} IconSelected={'History'}></TapMenu>
    </View>
  );
};

export default CameraQR;
