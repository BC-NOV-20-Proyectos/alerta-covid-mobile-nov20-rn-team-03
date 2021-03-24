import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/Colors';
import {styles} from '../../../styles/HistoryTest/index';
import {GeneralConstants} from '../../../utils/Constants/GeneralConstants'
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
        <FormLine Label={GeneralConstants.date} TextInput={GeneralConstants.datedate}></FormLine>
      </View>

      <View
        style={styles.SubContainerDataUser}>
        <View
          style={styles.SubContainerTest}>
          <Text>Test Result</Text>
        </View>

        <FormLine Label={GeneralConstants.dateofrest} TextInput={GeneralConstants.dateofrestdate}></FormLine>
        <FormLine Label={GeneralConstants.dateResult} TextInput={GeneralConstants.dateResultDate}></FormLine>
        <FormLine Label={GeneralConstants.Testtype} TextInput={GeneralConstants.Quicktest}></FormLine>
        <FormLine Label={GeneralConstants.Testresult} TextInput={GeneralConstants.Testfailed}></FormLine>
        <FormLine
          Label={GeneralConstants.SymptomsTest}
          TextInput={GeneralConstants.textInput}></FormLine>
      </View>
    </View>
  );
};

export default ScrollWhite;
