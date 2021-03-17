import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {styles} from '../styles/HistoryTest/index';
import Icons from 'react-native-vector-icons/EvilIcons';
import IconTabMenu from 'react-native-vector-icons/Feather';
import IconTabMenuHistory from 'react-native-vector-icons/FontAwesome';
import History from '../components/atoms/HistoryTest/History'
const HistoryTest = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/Welcome.png')}
      style={styles.ImageBackground}>

       <Text style={styles.TextTile}>History</Text>
      
      <View style={{display: 'flex', flexDirection: 'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.ContainerSymptoms}>
            <Text>Symptoms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContainerTest}>
            <Text>Test</Text>
          </TouchableOpacity>
      </View>

       <History />

      <View style={styles.ContainerTabMenu}>
      <TouchableOpacity style={styles.ContainerIcon}>
        <IconTabMenu
          name="user"
          style={styles.menuIcon}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerIcon}>
          <IconTabMenu
          name="home"
          style={styles.menuIcon}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerIconHistory}>
          <IconTabMenuHistory
          name="history"
          style={styles.menuIcon}
        />
        </TouchableOpacity>
       
      </View>
    </ImageBackground>
  );
};

export default HistoryTest;
