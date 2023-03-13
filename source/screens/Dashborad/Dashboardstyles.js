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
  welcomeText: {
    alignSelf: 'center',
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.medium,
    marginTop: responsiveHeight(5),
  },
  dashboardImg: {
    alignItems: 'center',
    marginTop: responsiveHeight(17),
  },
  successimage: {
    height: responsiveHeight(26),
    width: responsiveWidth(69),
    alignSelf: 'center',
  },
  headertext: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.Xlarge,
    marginTop: responsiveHeight(5),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(84),
  },
  desc: {
    fontSize: fontSize.addIc,
    color: '#FFFFFF50',
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(80),
    fontFamily: fontFamily.regular,
  },
});

export {styles};
