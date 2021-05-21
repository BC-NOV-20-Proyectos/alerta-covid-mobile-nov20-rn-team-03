import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {SymptomsConstants} from '../../../utils/Constants/SymptomsConstants';

const CheckboxSymptoms = ({Symptom, setFever, setCough, setFatigue, setSense, setBreathing, setChest_pain, setmove, setfingers}) => {
  const [check, isCheck] = useState(false);

  return (
    <CheckBox
      title={Symptom}
      checked={check}
      onPress={() => {
        isCheck(!check);
        console.log(check);
        if (check === false && Symptom === SymptomsConstants.fever) {
          setFever('fever', 'true');
        } else if(check === false && Symptom === SymptomsConstants.cough) {
          setCough('cough', 'true');
        } else if(check === false && Symptom === SymptomsConstants.fatigue) {
          setFatigue('fatigue', 'true');
        } else if(check === false && Symptom === SymptomsConstants.sense) {
          setSense('sense', 'true');
        } 
        
        
        else if(check === false && Symptom === SymptomsConstants.breathing) {
          setBreathing('breathing', 'true');
        } else if(check === false && Symptom === SymptomsConstants.Chest_pain) {
          setChest_pain('Chest_pain', 'true');
        } else if(check === false && Symptom === SymptomsConstants.move) {
          setmove('move', 'true');
        } else if(check === false && Symptom === SymptomsConstants.fingers) {
          setfingers('fingers', 'true');
        }
        
        else {
          console.log('No check');
        }
        //console.log(formSymptons)
      }}
    />
  );
};

export default CheckboxSymptoms;