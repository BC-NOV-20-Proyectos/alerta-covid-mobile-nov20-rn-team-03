import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from '../../../styles/HistoryTest/index';
import IconTabMenu from 'react-native-vector-icons/Feather';

const FormLine = ({Label, TextInput}) => {
    return (
      <View style={{display: 'flex', flexDirection: 'row',justifyContent:'space-between',  marginLeft: 20, marginBottom:15, marginTop:2}}>
        <Text style={{color:'#888888', marginRight: 50}}>{Label}</Text>
        <Text style={{color:'#888888'}}>{TextInput}</Text>
        <TouchableOpacity>
        <IconTabMenu
          name="chevron-right"
          style={styles.menuIcon}
        />
       </TouchableOpacity>

      </View>
    
    )
}

export default FormLine;