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
<<<<<<< HEAD
    MainContainer: {

=======
    title:{
        color: colors.grayFont,
        fontSize:35,
        fontWeight: 'bold',
        paddingVertical:30,
        paddingLeft: '5%',
        paddingRight: '10%'
>>>>>>> e32013b69691500e1a8650dd68421d6fcd8c81de
    },
});