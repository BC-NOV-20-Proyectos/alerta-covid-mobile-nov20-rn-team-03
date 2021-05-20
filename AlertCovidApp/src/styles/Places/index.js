import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';

export const stylesPlace = StyleSheet.create({
  place: {
    flexDirection: 'row',
    backgroundColor: colors.grayLine,
    borderRadius: 5,
    marginBottom: 5,
    borderBottomColor: colors.grayLine,
    borderBottomWidth: 1,
  },
  text: {
    marginLeft: 20,
  },
});
