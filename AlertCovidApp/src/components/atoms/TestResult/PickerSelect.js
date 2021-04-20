import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/TestResult';
import RNPickerSelect from 'react-native-picker-select';

const PickerSelect = () => {
    const [isSelectedPicker,setIsSelectedPicker] = useState("");

    return(
        <View>
           <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            onValueChange={(isSelectedPicker) => setIsSelectedPicker(isSelectedPicker)}
            placeholder= {{label: "Select options", value: null }}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        /> 
        </View>
    );
};

export default PickerSelect;