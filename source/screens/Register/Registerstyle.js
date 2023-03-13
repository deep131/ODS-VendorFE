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
  left: {
    left: 40,
  },

  headertext: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.extraLarge,
    marginTop: responsiveHeight(5),
    width: responsiveWidth(84),
  },
  desc: {
    fontSize: fontSize.addIc,
    color: '#FFFFFF50',
    width: responsiveWidth(80),
    fontFamily: fontFamily.regular,
  },
  inputContainer: {
    paddingBottom: 100,
    alignSelf: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    marginTop: spaceVertical.semiSmall,
    justifyContent: 'space-around',
  },
  genderViewcontainer: {
    width: responsiveWidth(35),
    borderWidth: 1,
    borderColor: colors.halfwhite,
    height: responsiveHeight(8),
    borderRadius: borderRadius.large,
    backgroundColor: colors.nocolor,
  },
  genderStyle: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: colors.nocolor,
    left: 10,
  },
  genderTitle: {color: colors.halfwhite},
  textinput: {
    marginTop: spaceVertical.normal,
    width: responsiveWidth(80),
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    backgroundColor: colors.nocolor,
  },
  datesContainer: {
    width: responsiveWidth(40),
    borderWidth: 1,
    borderColor: colors.halfwhite,
    height: responsiveHeight(8),
    borderRadius: borderRadius.large,
    justifyContent: 'center',
  },
  dateTitleContainer: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: colors.nocolor,
    left: 10,
  },
  datesTitle: {color: colors.halfwhite},
  dateString: {
    color: colors.white,
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.medium,
  },
  zipContainer: {
    flexDirection: 'row',
    marginTop: spaceVertical.semiSmall,
    justifyContent: 'space-around',
  },
  zipinput: {
    textAlign: 'center',
    width: responsiveWidth(30),
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    backgroundColor: colors.nocolor,
    bottom: 5,
  },
  stateContainer: {
    width: responsiveWidth(45),
    borderWidth: 1,
    borderColor: colors.halfwhite,
    height: responsiveHeight(8),
    borderRadius: borderRadius.large,
    justifyContent: 'center',
  },
  stateLabel: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: colors.nocolor,
    left: 10,
  },
});

export {styles};
