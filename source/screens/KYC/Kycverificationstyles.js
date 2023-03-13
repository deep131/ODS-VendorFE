import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
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
    overflow: 'visible',
  },
  header: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    justifyContent: 'center',
  },
  welcomeText: {
    alignSelf: 'center',
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.medium,
    marginTop: responsiveHeight(5),
  },
  leftIcon: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    position: 'absolute',
    left: 20,
    top: 40,
  },
  headertext: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.extraLarge,
    marginTop: responsiveHeight(5),
    width: responsiveWidth(84),
  },
  mainContainer:{
    width: responsiveWidth(80), 
    alignSelf: 'center'
  },
  desc: {
    fontSize: fontSize.addIc,
    color: '#FFFFFF50',
    width: responsiveWidth(80),
    fontFamily: fontFamily.regular,
  },
  subDesc: {
    fontFamily: fontFamily.medium,
    color: colors.white,
    left: 20,
  },
  uploadImg: {
    alignSelf: 'center',
    width: responsiveWidth(80),
    height: responsiveHeight(26),
    marginTop: spaceVertical.semiSmall,
  },
  doctext: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.tileHeader,
    width: responsiveWidth(50),
  },
  docLogo: {height: 40, width: 40, tintColor: colors.white},
  tickLogo: {
    height: 40,
    width: 40,
  },
  docview: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    height: responsiveHeight(8),
    backgroundColor: colors.bacgray,
    marginTop: spaceVertical.small,
    borderRadius: borderRadius.large,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export {styles};
