import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Title from '../Title';
import BackgroundImage from '../BackgroundImage';
import {styles} from '../../../styles/InformationSymptoms';

const InformationSymptoms = () => {
  return (
    <View style={styles.ScreenContainer}>
      <BackgroundImage></BackgroundImage>
      <Title></Title>
      <View style={styles.Container}>
        <ScrollView>
        <View style={styles.InformationContainer}>
          <Text style={styles.Title}>Date Reported</Text>
          <View style={styles.TextContainer}>
            <Text style={styles.Text}>Date</Text>
            <Text style={styles.Text}>10/03/2021</Text>
          </View>
          <View style={styles.Line}></View>
          <Text style={styles.Title}>How where you feeling?</Text>
          <View style={styles.TextContainer}>
            <Text style={styles.Text}>I wasn't feeling right</Text>
          </View>
          <View style={styles.Line}></View>
          <Text style={styles.Title}>Symptoms</Text>
          <View style={styles.TextContainerSymptoms}>
            <Text style={styles.Text}>Fever</Text>
            <Text style={styles.Text}>Cough</Text>
            <Text style={styles.Text}>Pain chest with deep breaths</Text>
          </View>
          <View style={styles.Line}></View>
        </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>DELETE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InformationSymptoms;
