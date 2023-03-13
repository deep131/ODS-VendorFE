import React from 'react';
import {View,Text, StatusBar, ImageBackground} from 'react-native';
import {colors} from '../../styles/variables';
import TextInputs from '../../components/TextInputs';
import Button from '../../components/Button';
import Headers from '../../components/Headers';
import {styles} from './BankDetailsstyles';

const BankDetails = ({navigation}) => {
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
           <Headers title="Register"/>
        <View style={styles.mainContainer}>
          <Text style={styles.headertext}>Bank Details</Text>
          <Text style={styles.desc}>
            Seems you are new here, Let’s set up your profile.
          </Text>
        </View>
        <View style={styles.inputFiled}>
          <TextInputs style={styles.textinput} label="Account Name" />
          <TextInputs
            style={styles.textinput}
            label="Account Number"
            keyboardType={'email-address'}
          />
          <TextInputs style={styles.textinput} label="Bank Code" />
          <TextInputs
            style={styles.textinput}
            label="IBAN Number"
            keyboardType={'numeric'}
          />
          <Button
            color={colors.projectgreen}
            name="confirm Details"
            onPress={() => navigation.navigate('ConfirmDetail')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default BankDetails;
