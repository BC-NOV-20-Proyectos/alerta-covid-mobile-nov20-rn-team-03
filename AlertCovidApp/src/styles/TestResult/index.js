import {StyleSheet} from 'react-native';
import {colors} from '../../utils/Colors';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export const styles = StyleSheet.create({
  containerTestResult: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPlaces: {
    width: '90%',
    marginHorizontal: '5%',
    height: '72%',
    backgroundColor: colors.white,
    marginVertical: '5%',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  containerMainQR: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerQR: {
    width: '100%',
    marginHorizontal: '5%',
    height: '72%',
    backgroundColor: colors.white,
    marginVertical: '5%',
    borderRadius: 30,
    paddingVertical: 20,
  },
  ContainerFormResult: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: '90%',
    height: '55%',
    marginBottom: 20,
    marginTop: 60,
    marginHorizontal: 20,
  },
  SectionForm: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLine,
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  TitleForm:{
    color: colors.grayTitle,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
  },
  TextForm:{
    color: colors.grayFont,
    fontSize: 15,
  },
  DateForm:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10,
    alignItems:'center'
  },
  ContainerDate:{
    color: colors.grayFont,
    fontSize: 14,
    textAlign:'center',
    marginEnd:10
  },
  DateIconForm:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:colors.grayLine,
    width:170,
    borderRadius:6,
    justifyContent: 'space-around'
  },
  icon:{
    color: colors.grayFont
  },
  picker:{
    borderColor: colors.grayLine,
    borderWidth:1,
    width:170,      
    height:35,
    borderRadius:6,
    color:'black',
  }
});
