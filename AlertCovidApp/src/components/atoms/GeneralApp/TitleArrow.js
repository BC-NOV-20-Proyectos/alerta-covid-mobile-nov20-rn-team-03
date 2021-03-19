import React from 'react';
import {View, Text} from 'react-native';
import { styles } from '../../../styles';
import Icon from 'react-native-vector-icons/Feather';

const Title = ({navigation, textTitle, RouteGo}) => {
  return (
    <View style={styles.containerTitleArrow}>
      <Icon  name="arrow-left" style={styles.iconArrow} size={30} onPress={() => navigation.navigate(RouteGo)}/>
      <Text style={styles.titleArrow}>{textTitle}</Text>
    </View>
  );
};

export default Title;
