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
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: colors.grayprofile,
    alignSelf: 'center',
  },
  HiContainer: {
    flexDirection: 'row',
  },
  Hi: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  MyPlaces: { 
    height: 86,
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
    color: colors.gray,
  }, 
  UserInformationBold: {
    fontSize: 18,
    color: colors.gray,
    fontWeight: 'bold',
  },
  UserInformation: { 
    fontSize: 18,
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
    marginTop: 10,
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
