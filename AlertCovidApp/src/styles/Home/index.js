import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
    containerHome:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: '10%'
    },
    title:{
        color: colors.grayFont,
        fontSize:35,
        fontWeight: 'bold',
        marginTop: '13%',
        marginBottom:'1%',
        paddingLeft: '5%',
        paddingRight: '10%',
    },
    ButtonWellBad:{
        width: 120,
        height: 40,
        borderRadius: 50, 
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonSquare:{
        width: 120,
        height: 40,
        borderRadius: 10, 
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonLarge:{
        width: '60%',
        height: 43,
        borderRadius: 50, 
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'10%'
    },
    TextButton: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 15,
    },
    containerButtons:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginBottom:'5%'
    },
    titleCenter:{
        color: colors.grayFont,
        fontSize:35,
        fontWeight: 'bold',
        marginTop:'13%',
        marginBottom: '5%',
        textAlign:'center'
    },
    textKeep:{
        marginTop:'10%',
        textAlign: 'center',
        color:colors.grayFont
    }
});