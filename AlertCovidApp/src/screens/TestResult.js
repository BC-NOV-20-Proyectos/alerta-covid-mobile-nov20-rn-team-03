import React,{useState}  from 'react';
import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import {GeneralConstants} from '../utils/Constants/GeneralConstants'
import TapMenu from '../components/molecules/TapMenu';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import ButtonSave from '../components/atoms/GeneralApp/ButtonSecond';
import {styles} from '../styles/TestResult';
import DatePicker from '../components/atoms/TestResult/DatePicker';
import PickerSelect from '../components/atoms/TestResult/PickerSelect';
import moment from 'moment';
import {useFormik} from 'formik';
import axios from 'axios';

const TestResults = ({navigation}) => {
  const [formError, setFormError] = useState({});

  const {
    values,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      dateReported: '',
      dateTest: '',
      dateResult:'',
      testType:'',
      testResult:'',
      symptomsOnDay:'',
    },
    onSubmit: (values) => {
      console.log (values);
    },
  });
  return (
    <View style={styles.containerTestResult}>
      <Background></Background>
      <Title
        navigation={navigation}
        textTitle={GeneralConstants.testResultsTitle}
        RouteGo={'HomeScreen'}
      />
      <View style={styles.ContainerFormResult}>
        <View style={styles.SectionForm}>
          <Text style={styles.TitleForm}>{GeneralConstants.dateReported}</Text>
          <DatePicker textLabel={GeneralConstants.date}/>
        </View>
        <View style={styles.SectionForm}>
          <Text style={styles.TitleForm}>{GeneralConstants.testResultsTitle}</Text>
          <DatePicker textLabel={GeneralConstants.dateoftest} setDateTest={setFieldValue}/>
          <DatePicker textLabel={GeneralConstants.dateResult} setDateResult={setFieldValue}/>
          <PickerSelect textLabel={GeneralConstants.Testtype} setDateTypeTest={setFieldValue} textLabelResult={GeneralConstants.Testresult} setDateResult={setFieldValue} textLabelSymptoms={GeneralConstants.SymptomsTest} setDateSymptoms={setFieldValue}/>
        </View>
      </View>
      <ButtonSave
        navigation={navigation}
        RouteGo={'HistoryTest'}
        textButton={GeneralConstants.save}
        click={handleSubmit}
      />
      <TapMenu navigation={navigation} IconSelected={'Home'}></TapMenu>
    </View>
  );
};

export default TestResults;
