import {StyleSheet} from 'react-native';
import {colors} from '../utils/Colors';
import {windowHeight, windowWidth} from '../utils/Dimensions';

export const styles = StyleSheet.create({
    ImageBackground: {
        flex:1,
        width: windowWidth,
        height: windowHeight,
        position: 'absolute',
        resizeMode: 'cover',
    },
    title:{
        color: colors.grayFont,
        fontSize:35,
        fontWeight: 'bold',
<<<<<<< HEAD
        paddingVertical:10,
        paddingLeft: '5%',
=======
        paddingVertical:30,
        paddingLeft: '5%',  
>>>>>>> b4abfd324b7c9203b0e165bad53ee98ae4e6212d
        paddingRight: '10%'
    },
    containerTitleArrow:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        height: windowHeight/8,
        width:'100%',
    },
    iconArrow:{
        color: colors.grayFont,
        marginRight: '15%',
        marginLeft: '5%',
        alignItems: 'center',
    },
    titleArrow:{
        color: colors.grayFont,
        fontSize:35,
        fontWeight: 'bold',
    },
});