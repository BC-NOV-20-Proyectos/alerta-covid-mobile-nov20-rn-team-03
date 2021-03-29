import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LogInConstants} from '../../../utils/Constants/LogInConstants';
import {styles} from '../../../styles/LogIn';

const CreateAccountText = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.CreateAccountText}>
          {LogInConstants.CreateAccount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountText;
