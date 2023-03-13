import {React, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  responsiveHeight,
  colors,
  fontFamily,
  fontSize,
  responsiveWidth,
} from '../styles/variables';

const Headers = ({title, icon}) => {
  return (
    <View style={styles.container}>
      {icon !== '' ? (
        <Image
          style={styles.backArrow}
          source={require('../assets/images/arrow.png')}
        />
      ) : (
        <View></View>
      )}

      <Text style={styles.welcomeText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(5),
  },
  backArrow: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(5),
    position:"absolute",
    left:10,
     top:3
  },
  welcomeText: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize.medium,
    alignSelf:"center"
  },
});
export default Headers;
