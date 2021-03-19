import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {styles} from '../styles/HistoryTest/index2';
import TapMenu from '../components/molecules/TapMenu'
import History2 from '../components/atoms/HistoryTest/History2'

const HistoryTest2 = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/Welcome.png')}
      style={styles.ImageBackground}>

       <Text style={styles.TextTile}>History</Text>
      
      <View style={{display: 'flex', flexDirection: 'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.ContainerSymptoms}>
            <Text>Symptoms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContainerTest} onPress={()=>navigation.navigate('HistoryTest')}>
            <Text>Test</Text>
          </TouchableOpacity>
      </View>

       <History2/>

      <TapMenu navigation ={navigation} IconSelected={'History'} ></TapMenu>
    </ImageBackground>
  );
};

export default HistoryTest2;
