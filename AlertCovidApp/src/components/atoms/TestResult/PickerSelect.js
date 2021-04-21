import React, {useState} from 'react';
import {View, Text, TouchableOpacity, } from 'react-native';
import {styles} from '../../../styles/TestResult';
import RNPickerSelect from 'react-native-picker-select';

const PickerSelect = ({setDateTypeTest, setDateResult, setDateSymptoms, textLabel, textLabelResult, textLabelSymptoms}) => {
    const [isSelectedPickerType,setIsSelectedPickerType] = useState("");
    const [isSelectedPickerResult,setIsSelectedPickerResult] = useState("");
    const [isSelectedPickerSymptoms,setIsSelectedPickerSymptoms] = useState("");

    return(
        <View>
            <View style={styles.DateForm} >
            <Text style={styles.TextForm}>{textLabel}</Text>
            <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={{inputAndroid: styles.picker } }
            onValueChange={(setIsSelectedPickerType) => setDateTypeTest('testType',setIsSelectedPickerType)}
            placeholder= {{label: "Select options", value: null }}
            items={[
                { label: 'Quick Test', value: 'QuickTest' },
                { label: 'PCR', value: 'PCR' },
                { label: 'Antigens', value: 'Antigens' },
            ]}
        /> 
        </View>
        <View style={styles.DateForm} >
        <Text style={styles.TextForm}>{textLabelResult}</Text>
            <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={{inputAndroid: styles.picker } }
            onValueChange={(setIsSelectedPickerResult) => setDateResult('testResult',setIsSelectedPickerResult)}
            placeholder= {{label: "Select options", value: null }}
            items={[
                { label: 'Positive', value: 'Positive' },
                { label: 'Negative', value: 'Negative' },
            ]}
        /> 
        </View>
        <View style={styles.DateForm} >
        <Text style={styles.TextForm}>{textLabelSymptoms}</Text>
            <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={{inputAndroid: styles.picker } }
            onValueChange={(setIsSelectedPickerSymptoms) => setDateSymptoms('symptomsOnDay',setIsSelectedPickerSymptoms)}
            placeholder= {{label: "Select options", value: null }}
            items={[
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
            ]}
        /> 
            </View>
      
        </View>
    );
};

export default PickerSelect;