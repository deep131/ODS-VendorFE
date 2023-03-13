import React from 'react';
import {View, Text, StatusBar, ImageBackground} from 'react-native';
import {colors} from '../../styles/variables';
import TextInputs from '../../components/TextInputs';
import Button from '../../components/Button';
import Headers from '../../components/Headers';
import {styles} from './CustomerSupportstyles';

const CustomerSupport = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.black}
        barStyle="light-content"
        hidden={false}
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/images/bgimage.png')}
        style={styles.img}
        resizeMode="stretch">
        <Headers title="Customer Support" />
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Support</Text>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subtitle}>
              we apologise for bringing you here. let’s just male things right.
            </Text>
          </View>

          <TextInputs
            label="Comments"
            placeholder="Type your message..."
            numberOfLines={5}
            style={styles.inputStyle}
          />
          <Button name="Submit Now" color={colors.projectgreen} />
          <View style={styles.bottomText}>
            <Text style={styles.serviceText}>
              Our customer service executives will never ask for any bank
              account details such as CVV, UPI Pin, OTP etc. across support
              channels. Please don’t share these details with anyone.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default CustomerSupport;
