import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {History} from '../../../utils/Constants/History';
import {colors} from '../../../utils/Colors';
import {styles} from '../../../styles/HistoryTest/index';
import IconTabMenu from 'react-native-vector-icons/Feather';

const HistoryData = () => {
  return (
    <ScrollView style={styles.ContainerDataUser}>
      <View style={styles.SubContainerDataUser}>
        <View style={styles.SubContainerTwoDataUser}>
          <Text>{History.sunday}</Text>
          <Text>{History.date}</Text>
          <TouchableOpacity>
            <Text style={styles.textHistory}>{History.notClear}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textHistory}>{History.testFailed}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TestContainer}>
          <Text style={styles.ViralText}>{History.viral}</Text>
          <TouchableOpacity>
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
            <Text style={styles.textHistory}>{History.negative}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TestContainer}>
          <Text style={styles.Text}>{History.antibody}</Text>
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
