import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import {colors} from '../../../utils/Colors';
import {styles} from '../../../styles/HistoryTest/index';
import {GeneralConstants} from '../../../utils/Constants/GeneralConstants'
import IconTabMenu from 'react-native-vector-icons/Feather';
import FormLine from '../GeneralApp/Form';
import DateTimePicker from '@react-native-community/datetimepicker';

const FormTestResult = () => {
  const [date, setDate] = useState(new Date('2021-04-31'));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.ContainerDataResults}>
      <View
        style={styles.SubContainerDataUser}>
        <View
          style={styles.SubContainerTest}>
          <Text>Data Reported</Text>
        </View>
        <View>
          <TouchableOpacity onPress={showDatepicker} >
            <Text>Date</Text>
          </TouchableOpacity>
            <Text></Text>
        </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
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

export default FormTestResult;
