import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from '../styles/variables';

const Card = ({onPressDelete, title, subTitle, subTitle2}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.logo}
          source={require('../assets/images/glasscleaning.png')}
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.subTitltBtn,
                {
                  backgroundColor: colors.purple,
                  marginRight: responsiveWidth(2),
                },
              ]}>
              <Text style={styles.subtitle}>{subTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.subTitltBtn, {backgroundColor: colors.green1}]}>
              <Text style={styles.subtitle}>{subTitle2}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.hr}></View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.textBtn, {width: responsiveWidth(28)}]}>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPressDelete}
          style={[styles.textBtn, {width: responsiveWidth(40)}]}>
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bacgray,
    width: responsiveWidth(85),
    borderRadius: borderRadius.semiLarge,
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(3),
    marginBottom: responsiveHeight(3),
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.white,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.semiLarge,
    color: colors.white,
  },
  subtitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.extraSmall,
    color: colors.white,
  },
  subTitltBtn: {
    height: responsiveHeight(3.5),
    borderRadius: borderRadius.boxRadius,
    paddingHorizontal: responsiveWidth(2.5),
    justifyContent: 'center',
  },
  logo: {
    height: responsiveHeight(9),
    width: responsiveWidth(18),
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: borderRadius.medium,
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    color: colors.white,
  },
  textBtn: {
    height: responsiveHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.medium,
    backgroundColor: colors.nocolor,
  },
  hr: {
    borderBottomColor: colors.grayline1,
    borderBottomWidth: 1,
    marginVertical: responsiveHeight(3),
  },
});

export default Card;
