import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 500,
    backgroundColor: colors.white,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  Line: {
    width: '100%',
    justifyContent: 'center',
    height: 1,
    backgroundColor: colors.grayLine,
  },
  InformationContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  Title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray,
    marginTop: 40,
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  TextContainerSymptoms: {
    marginTop: 20,
  },
  Text: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 20,
  },
  ScreenContainer: {
    margin: 20,
  },
  Button: {
    width: 123,
    height: 38,
    borderRadius: 25,
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  ButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
