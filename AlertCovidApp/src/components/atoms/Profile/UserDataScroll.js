import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Profile/index';

const UserDataSrollView = () => {
  return (
    <ScrollView style={styles.ContainerDataUser}>
      <View
        style={styles.LineTwo}>
        <View
          style={styles.ContainerInformation}>
          <Text>FULL NAME</Text>
          <TouchableOpacity>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Line}>
          <Text style={styles.Text}>Jorge Ramirez Garcia</Text>
        </View>
      </View>
      <View
        style={styles.LineTwo}>
        <View
          style={styles.ContainerEmail}>
          <Text>EMAIL</Text>
        </View>
        <View style={styles.Line}>
          <Text style={styles.Text}>jorgeramirezgarciaa@gmail.com</Text>
        </View>
      </View>
      <View
        style={styles.LineTwo}>
        <View
          style={styles.ContainerPassword}>
          <Text>PASSWORD</Text>
          <TouchableOpacity>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Line}>
          <Text style={styles.Text}>* * * * * * * * * *</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDataSrollView;
