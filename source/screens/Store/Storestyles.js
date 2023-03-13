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
  backArrow: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    position: 'absolute',
    left: 20,
    top: 40,
  },
  welcomeText: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.medium,
    marginTop: responsiveHeight(5),
    textAlign: 'center',
  },
  left: {left: 40},
  header: {
    // flexDirection: 'row',
    // width: responsiveWidth(100),
    // justifyContent: 'center',
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
  textinput: {
    marginTop: spaceVertical.semiSmall,
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
  imageContainer: {paddingBottom: 100, alignSelf: 'center'},
  imageStyle: {
    alignSelf: 'center',
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    borderRadius: borderRadius.circle,
    borderWidth: 1,
    borderColor: colors.white,
  },
  imgPress: {
    position: 'absolute',
    borderRadius: borderRadius.circle,
    alignSelf: 'center',
    left: 160,
    top: 75,
  },
  logo: {
    height: responsiveWidth(10),
    alignSelf: 'center',
    width: responsiveWidth(10),
    borderRadius: borderRadius.circle,
  },
  storeCategory: {
    marginTop: spaceVertical.semiSmall,
    alignSelf: 'center',
  },
  service: {
    width: responsiveWidth(80),
    borderWidth: 1,
    borderColor: colors.halfwhite,
    height: responsiveHeight(8),
    borderRadius: borderRadius.large,
    backgroundColor: colors.nocolor,
  },
  storeLabel: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: colors.nocolor,
    left: 10,
  },
  timeConatiner: {
    flexDirection: 'row',
    marginTop: spaceVertical.semiSmall,
    justifyContent: 'space-around',
  },
  timeBox: {
    width: responsiveWidth(35),
    borderWidth: 1,
    borderColor: colors.halfwhite,
    height: responsiveHeight(8),
    borderRadius: borderRadius.large,

    justifyContent: 'center',
  },
  timeLabel: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: colors.nocolor,
    left: 10,
  },
  timeTitle: {
    color: colors.white,
    alignSelf: 'center',
    fontFamily: fontFamily.semiBold,
  },
});

export {styles};
