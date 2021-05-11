import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from '../../../styles/TestResult';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({setDateResult, setDateTest, textLabel}) => {
    const [date, setDate] = useState(new Date('2021-04-21T12:00:00'));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);  
    const [datelabel, setDatelabel] = useState('');

    const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
      
  
      if (textLabel === 'Date of test'){
        var stringdate = selectedDate;
        var dayTest = selectedDate.getDate();
        var monthTest =selectedDate.getMonth();
        var yearTest = selectedDate.getFullYear();
        setDateTest('dateTest', `${yearTest}-${monthTest+1}-${dayTest}`);
      } else{
        var dayResult = selectedDate.getDate();
        var monthResult =selectedDate.getMonth();
        var yearResult = selectedDate.getFullYear();
        setDateResult('dateResult', `${yearResult}-${monthResult+1}-${dayResult}`)
      }
    
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  return (
    <View>
        <View >
        <View style={styles.DateForm} >
            <Text style={styles.TextForm}>{textLabel}</Text>
            <TouchableOpacity onPress={showDatepicker}  style={styles.DateIconForm}>
              <Text style={styles.ContainerDate} >{date.toDateString()}</Text> 
              <Icon
                name="chevron-down"
                style={styles.icon}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          placeholderText="select date"
          value={date}
          mode={date}
          dateFormat="MM/DD/YYYY"
          display="default"
          onChange={onChange}
          is24Hour={false}
        />
      )}
    </View>
  );
};

export default DatePicker;