import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  ContainerSymptoms: {
    display: 'flex',
    borderRadius: 30,
    backgroundColor: colors.grayBottom,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 40,
    marginTop: 50,
    marginLeft: 10,
  },
  ContainerTest: {
    display: 'flex',
    backgroundColor: colors.green,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 40,
    marginTop: 50,
    marginLeft: 10,
  },
  ContainerTabMenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    width: windowWidth / 1,
    height: 70,
  },
  ContainerDataUser: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    width: 310,
    marginBottom: 40,
    marginTop: 60,
  },
  ContainerDataResults: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: '90%',
    height: '55%',
    marginBottom: 20,
    marginTop: 60,
    marginHorizontal: 20,
  },
  ContainerIcon: {
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  SubContainerDataUser: {
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  SubContainerTwoDataUser: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
    marginTop: 5,
  },
  TestContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  FormContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginBottom: 15,
    marginTop: 2,
  },
  SubContainerTest: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
    marginTop: 5,
  },
  TextTile: {
    fontSize: 30,
    color: colors.gray,
    fontWeight: 'bold',
    marginRight: 25,
    marginTop: 15,
  },
  menuIconArrow: {
    color: colors.gray,
  },

  menuIcon: {
    color: colors.white,
  },
  peopleIcon: {
    fontSize: 100,
    color: colors.gray,
  },
  LabelForm: {
    color: colors.gray,
    marginRight: 50,
  },
  TextInputForm: {
    color: colors.gray,
  },
  Text: {
    color: colors.gray,
  },
  textHistory:{
    fontSize: 10, 
    color: colors.gray
  }

});
