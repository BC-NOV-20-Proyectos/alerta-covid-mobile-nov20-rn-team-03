import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/LogIn';
import Icons from 'react-native-vector-icons/Feather';
import {colors} from '../../../utils/Colors';
import { useFormik } from 'formik';

const InputLogIn = ({PlaceHolderText, iconName, text, label}) => {
  const {values, isSubmitting, setFieldValue, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <View style={styles.Input}>
      <Icons
        name={iconName}
        color={colors.gray}
        size={18}
        style={{marginHorizontal: 10}}
      />
      <TextInput
        placeholder={PlaceHolderText}
        style={styles.input}
        secureTextEntry={iconName === 'lock' && true}
        value={label === 'email' ? values.email : values.password}
        onChangeText ={text => setFieldValue(label, text)}></TextInput>
      <TouchableOpacity>
        <Text style={styles.forgotPass}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputLogIn;
