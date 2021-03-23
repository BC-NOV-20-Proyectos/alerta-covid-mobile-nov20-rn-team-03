import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/HistoryTest/index';
import IconTabMenu from 'react-native-vector-icons/Feather';

const FormLine = ({Label, TextInput}) => {
  return (
    <View
      style={styles.FormContainer}>
      <Text style={styles.LabelForm}>{Label}</Text>
      <Text style={styles.TextInputForm}>{TextInput}</Text>
      <TouchableOpacity>
        <IconTabMenu name="chevron-right" style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default FormLine;
