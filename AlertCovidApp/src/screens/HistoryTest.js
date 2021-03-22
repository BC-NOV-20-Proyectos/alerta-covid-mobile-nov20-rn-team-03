import React from 'react';
import {
  View,
  Text,
  TouchableOpacity, 
  ImageBackground,
} from 'react-native';
import {styles} from '../styles/HistoryTest/index';
import History from '../components/atoms/HistoryTest/History';
import TapMenu from '../components/molecules/TapMenu';
import {HistoryConstants} from '../utils/Constants/HistoryConstants';

const HistoryTest = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/Welcome.png')}
      style={styles.ImageBackground}>
      <Text style={styles.TextTile}>{HistoryConstants.History}</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.ContainerSymptoms}
          onPress={() => navigation.navigate('HistorySymptoms')}>
          <Text>{HistoryConstants.Symptoms}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ContainerTest}
          onPress={() => navigation.navigate('HistoryTest')}>
          <Text>{HistoryConstants.Test}</Text>
        </TouchableOpacity>
      </View>

      <History />
      <TapMenu navigation={navigation} IconSelected={'History'}></TapMenu>
    </ImageBackground>
  );
};

export default HistoryTest;
