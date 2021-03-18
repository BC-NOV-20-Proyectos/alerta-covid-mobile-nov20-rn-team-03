import React from 'react'
import { View, Text } from 'react-native'
import Background from '../components/atoms/Home/BackgroundImage'
import Title from '../components/atoms/GeneralApp/Title';
import Button from '../components/atoms/GeneralApp/Button';
import ButtonLarge from '../components/atoms/GeneralApp/ButtonLarge';
import ButtonSquare from '../components/atoms/GeneralApp/ButtonSquare';
import {GeneralConstants} from '../utils/Constants/GeneralConstants'
import { styles } from '../styles/Home'



const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Background></Background> 
            <Title textTitle={GeneralConstants.youFeel}></Title>
            <View style={styles.containerHome}>
                <View style={styles.containerButtons}>
                    <Button navigation={navigation} RouteGo={'HistoryTest'} textButton={GeneralConstants.well} />
                    <Button navigation={navigation} RouteGo={'Symptoms'} textButton={GeneralConstants.bad}/>
                </View>
                <Text style={styles.titleCenter}>{GeneralConstants.tested}</Text>
                <ButtonLarge navigation={navigation} RouteGo={'TestResult'} textButton={GeneralConstants.testResults}/>
                <Text style={styles.textKeep}>{GeneralConstants.keepFriends}</Text>
                <ButtonSquare navigation={navigation} RouteGo={'ScanQr'} textButton={GeneralConstants.scanQr} ></ButtonSquare>
            </View>
           
        </View>
    )
}

export default HomeScreen;
