import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
    ImageBackground: {
        flex:1,
        resizeMode: 'cover', 
        alignItems: 'center',  
    },
    ContainerSymptoms:{
        display:'flex',
        borderRadius: 30, 
        backgroundColor:colors.grayBottom,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 40, 
        marginTop:50,
        marginLeft:10,
    },
    ContainerTest:{
        display:'flex',
        backgroundColor:colors.green,
        borderRadius: 30, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 40, 
        marginTop:50,
        marginLeft:10,
    },
    ContainerTabMenu:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'flex-end',
        backgroundColor: colors.white,
        width: windowWidth/1,
        height: 70, 
    },
    ContainerDataUser:{
       flex:1,
        backgroundColor: colors.white,
        borderRadius: 20, 
        width: 310,
        marginBottom:40,
        marginTop:60,
    },
    ContainerIcon:{
        backgroundColor: colors.grayLogo,
        borderRadius: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, 
        marginTop:10,
        marginBottom:10,
    },
    ContainerIconHistory:{
        backgroundColor: colors.blue,
        borderRadius: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, 
        marginTop:10,
        marginBottom:10,
    },
    TextTile: {
        fontSize: 30,
        color: colors.gray,
        fontWeight: 'bold', 
       marginRight:25,
       marginTop:15,
    },
  
    menuIcon: {
        fontSize: 40,
        color: colors.gray,
      },
      peopleIcon: {
        fontSize: 100,
        color: colors.gray,
      },
  
});