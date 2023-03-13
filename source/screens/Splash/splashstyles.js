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
  } from'../../styles/variables';

  
  
  const styles = StyleSheet.create({

container:{
    backgroundColor: colors.black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{height: responsiveHeight(14.8), width: responsiveWidth(70)},

logotext:{
          fontSize: fontSize.Xlarge,
          color: colors.white,
        
          marginTop: spaceVertical.small,
          fontFamily:fontFamily.semiBold
        }

  });
  export {styles};