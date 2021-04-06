import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import TapMenu from '../components/molecules/TapMenu';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/TitleArrow'; 
import {GeneralConstants} from '../utils/Constants/GeneralConstants'; 
import {styles} from '../styles/TestResult';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const onSuccess = (e) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

const CameraQR = ({navigation}) => {


  return (
    <View style={styles.containerMainQR}>
      <Background></Background>
      <Title
        navigation={navigation}
        textTitle={GeneralConstants.QRtitle}
        RouteGo={'HomeScreen'}
      />
      <TouchableOpacity onPress={()=>{
          navigation.navigate('ScanQr')
          }}>
          <Text>My places List</Text>
      </TouchableOpacity>

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
