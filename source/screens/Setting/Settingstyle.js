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
    overflow: 'visible',
  },
  settingBoxStyle:{
    marginTop: responsiveHeight(18),
  },
  renders:{
    width: responsiveWidth(80),
    alignSelf:"center",
    borderBottomWidth:0.5,
    borderBottomColor:colors.footerIcon,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"center",
  },
  contentContainerStyle:{
    paddingBottom: spaceVertical.extraLarge,
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
