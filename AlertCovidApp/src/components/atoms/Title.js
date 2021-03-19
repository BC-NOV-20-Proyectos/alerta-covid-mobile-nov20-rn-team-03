import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/Symptoms';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../utils/Colors'; 

const Title = (props) => {
  return (
    <View style={styles.Items}>
      <Text style={styles.Title}>
        <TouchableOpacity style={styles.Icon}>
          <Icon name="arrowleft" color={colors.grayTitle} size={32}></Icon>
        </TouchableOpacity>
        Information Symptoms
      </Text> 
    </View>
  );
};

export default Title;
