import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.nocolor,
  },
  img: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(60),
    marginTop: spaceVertical.semiSmall,
    overflow: 'visible'
  },
  welcomeText: {
    alignSelf: 'center',
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.medium,
    marginTop: responsiveHeight(5),
  },
  mainContainer:{alignItems: 'center', marginTop: responsiveHeight(17)},
  successimage:{
    height:responsiveHeight(19),
    width:responsiveWidth(40),
    alignSelf:'center',

  },
  headertext: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.semiLarge,
    marginTop: responsiveHeight(5),
    alignSelf:'center',textAlign:'center',
    width: responsiveWidth(84),
  },
  desc: {
    fontSize: fontSize.tileHeader,
    color: '#FFFFFF',
    alignSelf:'center',
    textAlign:'center',
    

    width: responsiveWidth(70),
    fontFamily: fontFamily.regular,
  },

});

export {styles};