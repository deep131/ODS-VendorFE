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
  },
  docContainerStyle: {
    backgroundColor: colors.bluebtn,
    borderRadius: borderRadius.large,
    width: responsiveWidth(80),
    alignSelf: 'center',
    alignItems: 'center',
    height: responsiveHeight(26),
    paddingVertical: responsiveHeight(5),
    justifyContent: 'space-between',
    marginTop: spaceVertical.XXlarge,
  },
  selectLogo: {
    height: responsiveHeight(9),
    width: responsiveHeight(9),
  },
  title: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.semiLarge,
  },
  subTitle: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.extraSmall,
    textAlign: 'center',
  },
  contentContainerStyle: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    paddingBottom: responsiveHeight(55),
  },
  rendersBoxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(3),
    // borderBottomColor: 'white',
    borderWidth: 0.3,
  },
  row: {
    flexDirection: 'row',
  },
  docTitle: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.small,
    marginLeft: responsiveWidth(2),
  },
  boxView: {
    height: responsiveHeight(4),
    width: responsiveWidth(8),
    borderRadius: borderRadius.otpradius,
    backgroundColor: colors.bacgray,
    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: responsiveWidth(2),
  },
});

export {styles};
