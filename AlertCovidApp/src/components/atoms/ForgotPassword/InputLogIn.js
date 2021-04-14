import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/LogIn';
import Icons from 'react-native-vector-icons/Feather';
import {colors} from '../../../utils/Colors';

const InputLogIn = ({
  PlaceHolderText,
  iconName,
  text,
  label,
  click,
  setUserEmail,
  setUserPass,
}) => {
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
        onChangeText={(text) => {
          if (PlaceHolderText === 'Email') {
            setUserEmail('email', text);
          } else {
            setUserPass('password', text);
          }
        }}
      ></TextInput>
      <TouchableOpacity onPress={'ForgotPassword'}>
        <Text style={styles.forgotPass}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputLogIn;
