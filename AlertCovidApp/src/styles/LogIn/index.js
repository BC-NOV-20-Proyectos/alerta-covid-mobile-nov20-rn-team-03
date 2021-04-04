import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: windowWidth,
    height: windowHeight,
  },
  Logo: {
    width: 120,
    height: 120,
  },
  ContainerLogo: {
    backgroundColor: colors.grayLogo,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    marginTop: 30,
  },
  TextTile: {
    fontSize: 36,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  Background: {
    alignItems: 'center',
  },
  TextInput: {
    marginTop: 15,
    marginBottom: 15,
    color: colors.gray,
    justifyContent: 'flex-start',
  },
  Input: {
    width: '100%',
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Icons: {
    width: 32,
    height: 32,
  },
  ButtonLogIn: {
    width: '38%',
    height: 45,
    borderRadius: 50,
    marginTop: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextButton: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 15,
  },
  CreateAccountText: {
    color: colors.gray,
    marginTop: 10,
  },
  Covid: {
    width: 206,
    height: 202,
  },
  LogInScreenContainer: {
    width: '90%',
  },
  containerForm: {
    width: '100%',
    height: windowHeight / 3.5,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  forgotPass: {
    color: colors.gray,
    justifyContent: 'flex-end',
    fontSize: 13,
  },
  input: {
    width: '50%',
  },
  iconLogIn: {
    width: 32,
    height: 32,
  },
  errortext:{
    color:colors.white,
  }
});
