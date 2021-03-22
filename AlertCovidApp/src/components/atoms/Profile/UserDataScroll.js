import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../../../styles/Profile/index';

const UserDataSrollView = () => {
  return (
    <ScrollView style={styles.ContainerDataUser}>
      <View
        style={{borderBottomWidth: 1, marginBottom: 8, marginHorizontal: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
            marginRight: 15,
            marginLeft: 20,
          }}>
          <Text>FULL NAME</Text>
          <TouchableOpacity>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20}}>
          <Text style={styles.Text}>Jorge Ramirez Garcia</Text>
        </View>
      </View>
      <View
        style={{borderBottomWidth: 1, marginBottom: 8, marginHorizontal: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 5,
            marginTop: 15,
            marginLeft: 20,
          }}>
          <Text>EMAIL</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20}}>
          <Text style={styles.Text}>jorgeramirezgarciaa@gmail.com</Text>
        </View>
      </View>
      <View
        style={{borderBottomWidth: 1, marginBottom: 8, marginHorizontal: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
            marginTop: 15,
            marginLeft: 20,
            marginRight: 15,
          }}>
          <Text>PASSWORD</Text>
          <TouchableOpacity>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20}}>
          <Text style={styles.Text}>* * * * * * * * * *</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDataSrollView;
