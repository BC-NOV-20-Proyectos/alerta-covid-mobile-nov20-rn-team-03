import React,{useState, useEffect}  from 'react';
import {View, Text, Alert} from 'react-native';
import {GeneralConstants} from '../utils/Constants/GeneralConstants'
import TapMenu from '../components/molecules/TapMenu';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import ButtonSave from '../components/atoms/GeneralApp/ButtonSecond';
import {styles} from '../styles/TestResult';
import DatePicker from '../components/atoms/TestResult/DatePicker';
import PickerSelect from '../components/atoms/TestResult/PickerSelect';
import {Services} from '../utils/Constants/Services';
import moment from 'moment';
import {useFormik} from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TestResults = ({navigation}) => {
  const [userTokenTest, setUserTokenTest] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userToken').then((response) => {
      setUserTokenTest(response);
    });
  });

  const {
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      dateReported: moment().format("YYYY-MM-DD"),
      dateTest: '',
      dateResult:'',
      testType:'',
      testResult:'',
      symptomsOnDay:'',
    },
    onSubmit: (values) => {
      axios
          .post(`${Services.UrlIncidents}`, {
            incident: {
              test_covid_attributes :{
                date_did: values.dateReported,
                date_get_result: values.dateResult,
                had_symptoms:true,
                type_test: values.testType,
                result: true
              }
            },
          },
          {
            headers: {
              Authorization: userTokenTest,
            },
          },
          )
          .then(
            (response) => { 
              console.log(response);
              console.log('Test regisdsfsdfsdfsdftered')
              console.log(response.data);         
              console.log('Test registered')
            },
            (error) => {
              Alert.alert('unregistered test!!');
            },
          );

      
      console.log (values);
      navigation.navigate('HistoryTest')
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
          <View style={styles.DateForm}>
            <Text style={styles.TextForm}>{GeneralConstants.date}</Text>
            <Text style={styles.TextForm}>{moment().format("MMM Do YY")}</Text>
          </View>
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
