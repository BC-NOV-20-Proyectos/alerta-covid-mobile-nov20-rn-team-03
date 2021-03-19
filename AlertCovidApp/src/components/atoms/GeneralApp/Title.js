import React from 'react';
import {View, Text} from 'react-native';
import { styles } from '../../../styles/Home';

const Title = ({textTitle}) => {
  return (
    <View>
      <Text style={styles.title}>{textTitle}</Text>
    </View>
  );
};

export default Title;
