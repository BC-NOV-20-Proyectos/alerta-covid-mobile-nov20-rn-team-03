import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import TitleLogIn from '../components/atoms/LogIn/TitleLogIn';
import ButtonLogIn from '../components/atoms/LogIn/ButtonLogIn';
import CreateAccountText from '../components/atoms/LogIn/CreateAccountText';
import {LogInConstants} from '../utils/Constants/LogInConstants';
import {styles} from '../styles/Profile/index';
import Icons from 'react-native-vector-icons/EvilIcons';
import IconLogOut from 'react-native-vector-icons/Feather'

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
      <Text style={styles.TextTile}>Hi, Jorge</Text>
      <View style={styles.ContainerPlaces}>
        <Text>My Places</Text>
        <Text>10</Text>
      </View>

      <ScrollView style={styles.ContainerDataUser}>
        <View style={{borderBottomWidth: 1, marginBottom: 8}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 5,
              marginTop: 5,
            }}>
            <Text>FULL NAME</Text>
            <TouchableOpacity>
              <Text>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20}}>
            <Text style={{color:'#888888'}}>Jorge Ramirez Garcia</Text>
          </View>
        </View>
        <View style={{borderBottomWidth: 1, marginBottom: 8}}>
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
            <Text style={{color:'#888888'}}>jorgeramirezgarciaa@gmail.com</Text>
          </View>
        </View>
        <View style={{borderBottomWidth: 1, marginBottom: 8}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 5,
              marginTop: 15,
            }}>
            <Text>PASSWORD</Text>
            <TouchableOpacity>
              <Text>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20}}>
            <Text style={{color:'#888888'}}>* * * * * * * * * *</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.ContainerLogOut}>
      <IconLogOut
        name="log-out"
        style={styles.cameraIcon}
      />
        <Text style={{marginTop:8}}>Log Out</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Profile;
