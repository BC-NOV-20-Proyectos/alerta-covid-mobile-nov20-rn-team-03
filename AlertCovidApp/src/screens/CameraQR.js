import React,{useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import TapMenu from '../components/molecules/TapMenu';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/TitleArrow'; 
import {GeneralConstants} from '../utils/Constants/GeneralConstants'; 
import {styles} from '../styles/TestResult';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const CameraQR = ({navigation}) => {

  const [userTokenCamera, setuserTokenCamera] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userToken').then((response) => {
      setuserTokenCamera(response);
      console.log(response);
    });
  });  

  const onSuccess = (e) => {
    const dataQr = e.data;

    alert(dataQr)
    console.log(dataQr);
    AsyncStorage.setItem('placesCode', dataQr);

   axios.post(`${GeneralConstants.urlPlaces}`, {
          place_history: {
            id: dataQr,
          }  
        },{
          headers: {
           Authorization: userTokenCamera
         },
        })
        .then((response) => {   
            console.log(response.data)
            console.log('Code registered!!')
            navigation.navigate('Places')
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
      {/* {result && <Text>{JSON.stringify(result,null,2)}</Text>} */}     

      <View style={styles.containerQR}>
         <QRCodeScanner         
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.auto}
            fadeIn={false}
          >
          </QRCodeScanner>
      </View>
      <TapMenu navigation={navigation} IconSelected={'History'}></TapMenu>
    </View>
  );

};

export default CameraQR;
