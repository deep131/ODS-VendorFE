import {StyleSheet} from 'react-native';
import {
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
  leftIcon: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    position: 'absolute',
    left: 20,
    top: 40,
  },
  welcomeText: {
    alignSelf: 'center',
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.medium,
    marginTop: responsiveHeight(5),
  },
  mainContainer: {
    width: responsiveWidth(80),
    alignSelf: 'center',
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
  inputFiled: {
    paddingBottom: 100,
    alignSelf: 'center',
  },
  textinput: {
    marginTop: spaceVertical.normal,
    width: responsiveWidth(80),
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
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
});

export {styles};
