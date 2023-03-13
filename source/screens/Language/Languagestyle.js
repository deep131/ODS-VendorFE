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
    zIndex: 1,
  },
  contentContainerStyle: {
    marginTop: spaceVertical.XXlarge,
    paddingBottom: spaceVertical.XXlarge,
  },
  rendersBoxStyle: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    paddingVertical: spaceVertical.small,
  },
  title: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.normal,
  },
  subTitle: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.XXsmall,
  },
});

export {styles};
