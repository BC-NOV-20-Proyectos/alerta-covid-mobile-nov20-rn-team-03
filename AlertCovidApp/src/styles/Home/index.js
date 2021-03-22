import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
  containerHome: {
    height: windowHeight,
    width: windowWidth,
  },
  containerTitle: {
    height: '20%',
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    height: windowHeight / 1.4,
  },
  title: {
    color: colors.grayFont,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '5%',
    paddingLeft: '5%',
    paddingRight: '10%',
    height: windowHeight / 8,
  },
  ButtonWellBad: {
    width: 120,
    height: 40,
    borderRadius: 50,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonSquare: {
    width: 130,
    height: 40,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ButtonLarge: {
    width: '60%',
    height: 43,
    borderRadius: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
    flexDirection: 'row',
  },
  TextButton: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '5%',
  },
  titleCenter: {
    color: colors.grayFont,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '13%',
    marginBottom: '5%',
    textAlign: 'center',
  },
  textKeep: {
    marginTop: '10%',
    textAlign: 'center',
    color: colors.grayFont,
  },
  IconQr: {
    color: colors.white,
    marginRight: 10,
    justifyContent: 'center',
  },
});
