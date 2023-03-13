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
    overflow: 'visible'
  },

  dottedlogo: {
    marginTop: responsiveHeight(20),
    marginBottom: responsiveHeight(3),
    width: responsiveWidth(37.5),
    height: responsiveWidth(37.5),
    alignSelf: 'center',
    position: 'relative',
  },
  circleLogo: {
    marginTop: responsiveHeight(2),
    width: '75%',
    height: '75%',
    alignSelf: 'center',
  },
  touchlogo: {
    position: 'absolute',
    top: spaceVertical.extraLarge + 2,
    right: responsiveWidth(3),
  },
  contentContainerStyle:{
    paddingBottom: spaceVertical.extraLarge,
  },
  rendersBoxStyle:{
    width: responsiveWidth(80),
    alignSelf:"center",
    borderBottomWidth:0.5,
    borderBottomColor:colors.footerIcon,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"center",
  },
  renderStyle: {
    flexDirection: 'row',
    paddingVertical:spaceVertical.small,
  },
  LeftLogo:{
    height: responsiveHeight(2.5),
    width: responsiveWidth(4.5),
  },
  title:{
    fontFamily: fontFamily.regular,
    color: colors.white,
    marginLeft: 15,
    fontSize: fontSize.small,
  },
  backIconStyle:{
    paddingVertical:spaceVertical.small,
  }
});

export {styles};
