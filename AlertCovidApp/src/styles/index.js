import {StyleSheet} from 'react-native';
import {colors} from '../utils/Colors';
import {windowHeight, windowWidth} from '../utils/Dimensions';

export const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
        resizeMode: 'cover', 
        width: windowWidth,
        height: windowHeight,  
    },
    title:{
        color: colors.grayFont,
        fontSize:35,
        fontWeight: 'bold',
        paddingVertical:30,
        paddingLeft: '5%',  
        paddingRight: '10%'
    },
});