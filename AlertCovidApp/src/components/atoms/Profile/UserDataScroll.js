import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {ProfileConstants} from '../../../utils/Constants/ProfileConstants'
import {styles} from '../../../styles/Profile/index';

const UserDataSrollView = () => {
  return (
    <ScrollView style={styles.ContainerDataUser}>
      <View style={styles.LineTwo}>
        <View
          style={styles.ContainerInformation}>
          <Text>{ProfileConstants.fullName}</Text>
          <TouchableOpacity>
            <Text>{ProfileConstants.change}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Line}>
          <TextInput placeholder={ProfileConstants.name}></TextInput>
        </View>
      </View>
      <View
        style={styles.LineTwo}>
        <View
          style={styles.ContainerEmail}>
          <Text>{ProfileConstants.email}</Text>
        </View>
        <View style={styles.Line}>
          <TextInput placeholder={ProfileConstants.email}></TextInput>
        </View>
      </View>
      <View style={styles.LineTwo}>
        <View
          style={styles.ContainerPassword}>
          <Text>{ProfileConstants.pass}</Text>
          <TouchableOpacity>
            <Text>{ProfileConstants.change}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Line}>
          <TextInput placeholder={ProfileConstants.pass}></TextInput>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDataSrollView;
