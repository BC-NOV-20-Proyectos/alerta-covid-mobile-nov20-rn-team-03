import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  ImageProfile: { 
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: colors.grayprofile,
    alignSelf: 'center',
  },
  HiContainer: {
    flexDirection: 'row',
  },
  Hi: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
  },
  MyPlaces: { 
    height: '10%',
    width: '60%',
    borderRadius: 22,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  MyPlacesText: { 
    fontSize: 18,
    color: colors.gray
  },
  MyPlacesNumber: { 
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray
  },
  View: {
    height: '50%',
    width: '90%',
    borderRadius: 22,
    backgroundColor: colors.white,  
    justifyContent: 'center' 
  },
  UserInformationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignSelf: 'center',
    width: '85%',   
  },
  UserInformationContainerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignSelf: 'center',
    width: '85%', 
    marginTop: 15,
  },
  UserInformationChange: { 
    fontSize: 14,
    color: colors.blue,
  }, 
  UserInformationBold: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: 'bold',
  },
  UserInformation: { 
    fontSize: 16,
    color: colors.gray,  
  }, 
  Line: {
    width: '90%',  
    height: 1,
    backgroundColor: colors.grayLine, 
    alignSelf: 'center', 
    marginTop: 25,
    marginBottom: 20,
  },
  LogOutButton: { 
    height: '8%',
    width: '90%',
    borderRadius: 22,
    marginTop: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  LogOutButtonText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray,
  },
});
