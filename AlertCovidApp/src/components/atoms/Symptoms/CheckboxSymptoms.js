import React, {useState} from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';


const CheckboxSymptoms = ({Symptom}) => {
  const [check, isCheck] = useState(false);
  const [formSymptons, setFormSymptoms] = useState({});

  return (
    <CheckBox
      title={Symptom}
      checked={check}
      onPress={() => {
        isCheck(!check);
        if (check === false) {
          setFormSymptoms(Symptom);
        } else {
          console.log('No check');
        }
      }}
    />
  );
};

export default CheckboxSymptoms;