import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Profile/index';

const InformationProfile = ({title, change, userinfo}) => {
  return (
    <View>
      <View style={styles.UserInformationContainer}>
        <Text style={styles.UserInformationBold}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.UserInformationChange}>{change}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.UserInformationContainerTwo}>
        <Text style={styles.UserInformation}>{userinfo}</Text>
      </View>
      <View style={styles.Line}></View>
    </View>
  );
};

export default InformationProfile;
