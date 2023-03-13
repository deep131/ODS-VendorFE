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
} from '../../../styles/variables';

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

  headertext: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.extraLarge,
    marginTop: responsiveHeight(5),

    width: responsiveWidth(84),
  },
  mainContainer:{
    width:responsiveWidth(80),
    alignSelf:"center",
  },
  desc: {
    fontSize: fontSize.addIc,
    color: '#FFFFFF50',

    width: responsiveWidth(80),
    fontFamily: fontFamily.regular,
  },
  inputContainer:{paddingBottom: 100, alignSelf: 'center'},
  textinput: {
    marginTop: spaceVertical.semiSmall,
    width: responsiveWidth(80),
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    backgroundColor: colors.nocolor,
  },
  bottomview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spaceVertical.semiSmall,
  },
text:{
    fontFamily: fontFamily.medium,
    color: colors.white,
    alignSelf: 'center',
    width: responsiveWidth(40),
  },
  inputvalidStyle:{
    fontSize: fontSize.small,
    color:colors.red,
    fontFamily:fontFamily.regular
  }

});

export {styles};