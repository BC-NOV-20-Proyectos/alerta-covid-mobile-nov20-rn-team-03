import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Profile/index';
import InformationProfile from './InformationProfile';
import {ProfileConstants} from '../../../utils/Constants/ProfileConstants';

const ViewInformation = () => {
  return (
    <View style={styles.View}>
      <InformationProfile
        title={ProfileConstants.fullName}
        change={ProfileConstants.change}
        userinfo={ProfileConstants.name}/>
      <InformationProfile
        title={ProfileConstants.email}
        change={ProfileConstants.change}
        userinfo={ProfileConstants.useremail}
      ></InformationProfile>
      <InformationProfile
        title={ProfileConstants.password}
        change={ProfileConstants.change}
        userinfo={ProfileConstants.password}
      ></InformationProfile>
    </View>
  );
};

export default ViewInformation;
