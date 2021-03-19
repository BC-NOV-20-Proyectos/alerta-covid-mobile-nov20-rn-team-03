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
import UserDataScrollView from '../components/atoms/Profile/UserDataScroll'

import IconTabMenu from 'react-native-vector-icons/Feather';
import IconTabMenuHistory from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/ProfileBackground.png')}
      style={styles.ImageBackground}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.ContainerLogo}>
        <Icons
        name="user"
        style={styles.peopleIcon}
        />
        </View>
        <TouchableOpacity style={styles.ContainerIcon}>
        <Icons
        name="camera"
        style={styles.cameraIcon}
      />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.ContainerPlaces}>
        <Text>My Places</Text>
        <Text>10</Text>
      </TouchableOpacity>

      <UserDataScrollView />

      <TouchableOpacity style={styles.ContainerLogOut}>
      <IconLogOut
        name="log-out"
        style={styles.cameraIcon}
      />
        <Text style={{marginTop:8}}>Log Out</Text>
      </TouchableOpacity>

      <View style={styles.ContainerTabMenu}>
      <TouchableOpacity style={styles.ContainerIconProfile}>
        <IconTabMenu
          name="user"
          style={styles.menuIcon}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerIconHome}>
          <IconTabMenu
          name="home"
          style={styles.menuIcon}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerIconHistory} onPress={() => navigation.navigate('HistoryTest')}>
          <IconTabMenuHistory
          name="history"
          style={styles.menuIcon}
        />
        </TouchableOpacity>
       
      </View>




    </ImageBackground>
  );
};

export default Profile;
