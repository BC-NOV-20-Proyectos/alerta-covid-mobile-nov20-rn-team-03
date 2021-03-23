import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/Colors';
import {styles} from '../../../styles/HistoryTest/index';
import IconTabMenu from 'react-native-vector-icons/Feather';
import FormLine from '../GeneralApp/Form';

const ScrollWhite = () => {
  return (
    <View style={styles.ContainerDataResults}>
      <View
        style={styles.SubContainerDataUser}>
        <View
          style={styles.SubContainerTest}>
          <Text>Data Reported</Text>
        </View>
        <FormLine Label={'Date'} TextInput={'10/03/2021'}></FormLine>
      </View>

      <View
        style={styles.SubContainerDataUser}>
        <View
          style={styles.SubContainerTest}>
          <Text>Test Result</Text>
        </View>

        <FormLine Label={'Date of rest'} TextInput={'06/03/2021'}></FormLine>
        <FormLine Label={'Date Result'} TextInput={'09/03/2021'}></FormLine>
        <FormLine Label={'Test type'} TextInput={'Quick test'}></FormLine>
        <FormLine Label={'Test result'} TextInput={'Test failed'}></FormLine>
        <FormLine
          Label={'Symptoms on the day of test'}
          TextInput={'Yes'}></FormLine>
      </View>
    </View>
  );
};

export default ScrollWhite;
