import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
    ImageBackground: {
        flex:1,
        resizeMode: 'cover', 
        alignItems: 'center',  
    },
    ContainerLogo:{
        backgroundColor: colors.grayLogo,
        borderRadius: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: 110, 
        marginTop: 20,
    },
    ContainerIcon:{
        backgroundColor: colors.grayLogo,
        borderRadius: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45, 
        marginTop: 80,
        marginLeft:5,
    },
    ContainerPlaces:{
        display:'flex',
        position:'absolute',
        backgroundColor: colors.white,
        borderRadius: 20, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 65, 
        marginTop:140,
    },
    ContainerLogOut:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:70,
        backgroundColor: colors.white,
        borderRadius: 20, 
       
        width: 300,
        height: 45, 
    },
    ContainerDataUser:{
       flex:1,
        backgroundColor: colors.white,
        borderRadius: 20, 
        width: 300,
        marginBottom:40,
        marginTop:60,
    },
    TextTile: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold', 
       marginRight:25,
       marginTop:15,
    },
    Background: {  
        alignItems: 'center', 
    },
    cameraIcon: {
        fontSize: 40,
        color: colors.gray,
      },
      peopleIcon: {
        fontSize: 100,
        color: colors.gray,
      },
    Icons: {
        width: 32,
        height: 32, 
    },
});