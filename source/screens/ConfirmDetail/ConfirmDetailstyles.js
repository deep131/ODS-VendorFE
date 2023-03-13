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

  headertext: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.extraLarge,
    marginTop: responsiveHeight(5),
    width: responsiveWidth(84),
  },
  mainContainer: {
    width: responsiveWidth(80),
    alignSelf: 'center',
  },
  inputFiled: {
    paddingBottom: 100, 
    alignSelf: 'center'
  },
  desc: {
    fontSize: fontSize.addIc,
    color: '#FFFFFF50',
    width: responsiveWidth(80),
    fontFamily: fontFamily.regular,
  },
  textinput: {
    marginTop: spaceVertical.normal,
    width: responsiveWidth(80),
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    backgroundColor: colors.nocolor,
  },
  row: {
    flexDirection: 'row',
    marginTop: spaceVertical.semiSmall,
    justifyContent: 'space-around',
  },
  subTitle: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: colors.nocolor,
    left: 10,
  },
  hafBox: {
    width: responsiveWidth(35),
    borderWidth: 1,
    borderColor: colors.halfwhite,
    height: responsiveHeight(8),
    borderRadius: borderRadius.large,
    backgroundColor: colors.nocolor,
  },
  zipinput: {
    textAlign: 'center',
    width: responsiveWidth(30),
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    backgroundColor: colors.nocolor,
    bottom: 5,
  },
  doctext: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.tileHeader,
    width: responsiveWidth(50),
  },
  docview: {
    height: responsiveHeight(8),
    backgroundColor: colors.bacgray,
    marginTop: spaceVertical.semiSmall,
    borderRadius: borderRadius.large,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  datetostring: {
    color: colors.white,
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.medium,
  },
  dateStyle: {
    width: responsiveWidth(40),
    borderWidth: 1,
    borderColor: colors.halfwhite,
    height: responsiveHeight(8),
    borderRadius: borderRadius.large,
    justifyContent: 'center',
  },
  timeTitle: {
    color: colors.white,
    alignSelf: 'center',
    fontFamily: fontFamily.semiBold,
  },
  stateContainer: {
    width: responsiveWidth(45),
    borderWidth: 1,
    borderColor: colors.halfwhite,
    height: responsiveHeight(8),
    borderRadius: borderRadius.large,
    justifyContent: 'center',
  },
  line: {
    borderWidth: 1,
    width: responsiveWidth(80),
    height: 3.5,
    backgroundColor: colors.linecolor,
    marginTop: spaceVertical.small,
  },
  service: {
    width: responsiveWidth(80),
    borderWidth: 1,
    borderColor: colors.halfwhite,
    height: responsiveHeight(8),
    borderRadius: borderRadius.large,
    backgroundColor: colors.nocolor,
  },
  top: {
    marginTop: spaceVertical.semiSmall,
    alignSelf: 'center',
  },
});

export {styles};
