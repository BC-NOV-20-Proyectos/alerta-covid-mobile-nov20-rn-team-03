import {StyleSheet} from 'react-native';
import {colors} from '../utils/Colors';
import {windowHeight, windowWidth} from '../utils/Dimensions';

export const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    resizeMode: 'cover',
  },
  title: {
    color: colors.grayFont,
    fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 30,
    paddingLeft: '5%',
    paddingRight: '10%', 
  },
  containerTitleArrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: windowHeight / 8,
    width: '100%',
    
  },
  iconArrow: {
    color: colors.grayFont,
    marginRight: '15%',
    marginLeft: '5%',
    alignItems: 'center',
  },
  titleArrow: {
    color: colors.grayFont,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
