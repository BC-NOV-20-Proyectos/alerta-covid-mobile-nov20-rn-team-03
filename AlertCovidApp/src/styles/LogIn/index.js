import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
    Logo: {
        width: 150,
        height: 150,
    },
    ContainerLogo:{
        backgroundColor: colors.grayLogo,
        borderRadius: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
    },
    TextTile: {
        fontSize: 36,
        color: colors.white,
        fontWeight: 'bold'
    },
    Background : {
        backgroundColor: colors.blue,
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInput: {
        marginTop: 40, 
        
    },
    Input: {
        width: '80%',
        height: 50,
        borderRadius: 50,
        
        backgroundColor: colors.white
    }
});