import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
  containerTestResult: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPlaces: {
    width: '90%',
    marginHorizontal: '5%',
    height: '72%',
    backgroundColor: colors.white,
    marginVertical: '5%',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  containerMainQR: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerQR: {
    width: '100%',
    marginHorizontal: '5%',
    height: '72%',
    backgroundColor: colors.white,
    marginVertical: '5%',
    borderRadius: 30,
    paddingVertical: 20,
  },
  
});
