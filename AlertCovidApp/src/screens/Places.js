import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TapMenu from '../components/molecules/TapMenu';
import Background from '../components/atoms/Home/BackgroundImage';
import Title from '../components/atoms/GeneralApp/TitleArrow';
import {GeneralConstants} from '../utils/Constants/GeneralConstants';
import {styles} from '../styles/TestResult';
import {stylesPlace} from '../styles/Places';

const Item = ({name, id}) => (
  <View style={stylesPlace.place}>
    <Text>{id}</Text>
    <Text style={stylesPlace.text}>{name}</Text>
  </View>
);

const TestResults = ({navigation, route}) => {
  const {arrayData} = route.params;
  const DATA = [];

  for (let i = 0; i < arrayData.length; i++) {
    DATA.push({
      id: `${i + 1}`,
      name: arrayData[i],
    });
  }

  const renderItem = ({item}) => <Item name={item.name} id={item.id} />;

  return (
    <View style={styles.containerTestResult}>
      <Background></Background>
      <Title
        navigation={navigation}
        textTitle={GeneralConstants.scanqr}
        RouteGo={'CameraQR'}
      />
      <View style={styles.containerPlaces}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <TapMenu navigation={navigation} IconSelected={'History'}></TapMenu>
    </View>
  );
};

export default TestResults;
