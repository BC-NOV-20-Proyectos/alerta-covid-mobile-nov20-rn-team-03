import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/Colors';
import {styles} from '../../../styles/HistoryTest/index';
import IconTabMenu from 'react-native-vector-icons/Feather';

const HistoryData = ({navigation}) => {
  return (
    <ScrollView style={styles.ContainerDataUser}>
      <View style={styles.SubContainerDataUser}>
        <View style={styles.SubContainerTwoDataUser}>
          <Text>Sunday</Text>
          <Text>28/03/2021</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 10, color: colors.gray}}>12:00 PM</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TestContainer}>
          <Text style={styles.gray}>Feeling sick</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('InformationSymptoms')}>
            <IconTabMenu
              name="chevron-right"
              style={styles.menuIconArrow}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.SubContainerDataUser}>
        <View style={styles.SubContainerTwoDataUser}>
          <Text>Friday</Text>
          <Text>03/03/2021</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 10, color: colors.gray}}>11:00 AM</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TestContainer}>
          <Text style={styles.gray}>Feeling sick</Text>
          <TouchableOpacity>
            <IconTabMenu
              name="chevron-right"
              style={styles.menuIconArrow}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HistoryData;
