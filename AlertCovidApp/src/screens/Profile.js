import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {styles} from '../styles/Profile/index';
import Icons from 'react-native-vector-icons/EvilIcons';
import IconLogOut from 'react-native-vector-icons/Feather';
import UserDataScrollView from '../components/atoms/Profile/UserDataScroll';
import TapMenu from '../components/molecules/TapMenu';

const Profile = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/ProfileBackground.png')}
      style={styles.ImageBackground}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.ContainerLogo}>
          <Icons name="user" style={styles.peopleIcon} />
        </View>
        <TouchableOpacity style={styles.ContainerIcon}>
          <Icons name="camera" style={styles.cameraIcon} size={30} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.ContainerPlaces}>
        <Text>My Places</Text>
        <Text>10</Text>
      </TouchableOpacity>

      <UserDataScrollView />

      <TouchableOpacity style={styles.ContainerLogOut}>
        <IconLogOut name="log-out" style={styles.cameraIcon} size={40} />
        <Text style={{marginTop: 8}}>Log Out</Text>
      </TouchableOpacity>
      <TapMenu navigation={navigation} IconSelected={'User'}></TapMenu>
    </ImageBackground>
  );
};

export default Profile;
