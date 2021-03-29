import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  Title: {
    fontSize: 46,
    fontWeight: 'bold',
    color: colors.grayTitle,
    textAlign: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '5%',
  },
  ButtonSymptoms: {
    width: '90%',
    height: 35,
    borderRadius: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  containerSymptoms: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextButton: {
    color: colors.grayTitle,
    fontSize: 14,
  },
  containerButtons: {
    width: '100%',
    height: '62%',
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
});
