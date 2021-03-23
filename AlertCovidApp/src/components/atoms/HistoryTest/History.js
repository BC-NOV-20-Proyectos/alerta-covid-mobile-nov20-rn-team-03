import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/Colors';
import {styles} from '../../../styles/HistoryTest/index';
import IconTabMenu from 'react-native-vector-icons/Feather';

const HistoryData = () => {
  return (
    <ScrollView style={styles.ContainerDataUser}>
      <View style={styles.SubContainerDataUser}>
        <View style={styles.SubContainerTwoDataUser}>
          <Text>Sunday</Text>
          <Text>28/03/2021</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 10, color: colors.gray}}>Not Clear/</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 10, color: colors.gray}}>Test failed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TestContainer}>
          <Text style={styles.ViralText}>Viral Test</Text>
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
            <Text style={{fontSize: 10, color: colors.gray}}>Negative</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TestContainer}>
          <Text style={styles.Text}>Antibody Test</Text>
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
