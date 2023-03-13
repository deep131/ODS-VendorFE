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
  mainContainer: {
    marginTop: responsiveHeight(19),
    marginHorizontal: responsiveWidth(10.5),
    flex: 1,
  },
  title: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.semiLarge,
  },
  subTitleContainer: {
    width: responsiveWidth(60),
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.extraSmall,
  },
  inputStyle: {
    backgroundColor: colors.nocolor,
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(4),
  },
  serviceText: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.extraSmall,
  },
  bottomText: {
    flex: 2,
    justifyContent: 'flex-end',
    marginBottom: responsiveHeight(6),
  },
});

export {styles};
