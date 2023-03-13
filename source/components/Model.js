import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from '../styles/variables';

const Models = ({onPressClose, onRequestClose, visible}) => {
    const[tab,settab]=useState(false)
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => onRequestClose()}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Are you sure?</Text>
            <Text style={styles.subTitle}>
              You want to Delete this Service?
            </Text>
            <View style={styles.row}>
              <TouchableOpacity style={[ styles.btn, {backgroundColor: tab ? colors.nocolor:colors.green1, marginRight:responsiveWidth(3)}]} 
              onPress={() => settab(!tab)}>
                
                <Text style={styles.btnText}  >
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[ styles.btn]} 
               onPress={onPressClose}>
                <Text style={styles.btnText}>
                    Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  btn: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    justifyContent:"center",
    alignItems:"center",
    width: responsiveWidth(28),
    height: responsiveHeight(4),
    borderWidth: 1,
    borderColor: colors.otpcolor,
    borderRadius: borderRadius.otpradius,
    marginTop: responsiveHeight(0.4),
  },
  btnText:{
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
  },

  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.medium,
    color: colors.white,
  },
  subTitle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: colors.white,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.nocolor,
    height: responsiveHeight(30),
    width: responsiveWidth(75),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.medium,
  },
});

export default Models;
