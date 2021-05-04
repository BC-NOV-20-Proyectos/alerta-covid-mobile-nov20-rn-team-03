import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Profile/index';
import Icons from 'react-native-vector-icons/Feather';
import {colors} from '../../../utils/Colors';

const InformationProfile = ({title, change, userinfo,iconName}) => {
  return (
    <View>
      <View style={styles.UserInformationContainer}>
        <Text style={styles.UserInformationBold}>{title}</Text> 
        <Icons
        name={iconName}
        color={colors.gray}
        size={18}
        style={{marginHorizontal: 10}}
        />
      </View>
      <View style={styles.UserInformationContainerTwo}>
        <Text style={styles.UserInformation}>{userinfo}</Text>
        <TouchableOpacity>
          <Text style={styles.UserInformationChange}>{change}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Line}></View>
    </View>
  );
};

export default InformationProfile;
