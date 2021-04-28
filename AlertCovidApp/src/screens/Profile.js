import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {styles} from '../styles/Profile';
import TapMenu from '../components/molecules/TapMenu';
import ViewInformation from '../components/atoms/Profile/ViewInformation';
import LogOutButton from '../components/atoms/Profile/LogOutButton';
import MyPlaces from '../components/atoms/Profile/MyPlaces';
import ImageProfile from '../components/atoms/Profile/ImageProfile';
import {ProfileConstants} from '../utils/Constants/ProfileConstants';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [userTokenProfile, setUserTokenProfile] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userToken').then((response) => {
      setUserTokenProfile(response);
    });
  });

  return (
    <ImageBackground
      source={require('../assets/images/ProfileBackground.png')}
      style={styles.ImageBackground}>
      <ImageProfile
        title={ProfileConstants.hi}
        name={ProfileConstants.name}></ImageProfile>
      <MyPlaces></MyPlaces>
      <ViewInformation></ViewInformation>
      <LogOutButton
        myToken={userTokenProfile}
        navigation={navigation}></LogOutButton>
      <TapMenu navigation={navigation} IconSelected={'User'}></TapMenu>
    </ImageBackground>
  );
};

export default Profile;
