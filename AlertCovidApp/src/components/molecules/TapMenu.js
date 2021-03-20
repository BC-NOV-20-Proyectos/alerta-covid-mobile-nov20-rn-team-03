import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/HistoryTest/index';
import IconTabMenu from 'react-native-vector-icons/Feather';
import {colors} from '../../utils/Colors'
import IconTabMenuHistory from 'react-native-vector-icons/FontAwesome';
import IconTabMenuHome from 'react-native-vector-icons/Entypo';

const TapMenu = ({navigation, IconSelected}) => {
  return (
    <View style={styles.ContainerTabMenu}>
    <TouchableOpacity style={[styles.ContainerIcon, {backgroundColor: IconSelected === 'User' ? colors.blue : colors.gray}]} onPress={()=>navigation.navigate('Profile')} >
      <IconTabMenuHistory
        name="user"
        style={styles.menuIcon}
        size={25}
      />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.ContainerIcon, {backgroundColor: IconSelected === 'Home' ? colors.blue : colors.gray}]} onPress={()=>navigation.navigate('HomeScreen')} >
        <IconTabMenuHome
        name="home"
        style={styles.menuIcon}
        size={25}
      />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.ContainerIcon, {backgroundColor: IconSelected === 'History' ? colors.blue : colors.gray}]} onPress={()=>navigation.navigate('HistorySymptoms')}>
        <IconTabMenuHistory
        name="history"
        style={styles.menuIcon}
        size={25}
      />
      </TouchableOpacity>    
    </View>
  );
};

export default TapMenu;
