import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Profile/index';
import InformationProfile from './InformationProfile';
import {ProfileConstants} from '../../../utils/Constants/ProfileConstants';

const ViewInformation = ({emailProfile, userProfile}) => {
  return (
    <View style={styles.View}>
      <InformationProfile
        title={ProfileConstants.fullName}
        iconName={'user'}
        userinfo={userProfile}/>
      <InformationProfile
        title={ProfileConstants.email}        
        userinfo={emailProfile}
        iconName={'mail'}
      ></InformationProfile>
      <InformationProfile
        title={ProfileConstants.password}
        change={ProfileConstants.change}
        userinfo={ProfileConstants.userPass}
      ></InformationProfile>
    </View>
  );
};

export default ViewInformation;
