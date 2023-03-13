import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import {colors} from '../../../styles/variables';
import TextInputs from '../../../components/TextInputs';
import Button from '../../../components/Button';
import Headers from '../../../components/Headers';
import * as yup from 'yup';
import {Formik} from 'formik';
import {styles} from './ForgotPasswordstyles';

export const showToast = msg => {
  if (Platform.OS === 'android') {
    return ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  } else {
    Alert.alert(msg);
  }
};

const ForgotPassword = ({navigation}) => {
  const ResetPassword = async email => {
    console.log('e', email);
    if (email) {
      navigation.navigate('ResetLink');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.black}
        barStyle="light-content"
        hidden={false}
        translucent={true}
      />
      <ImageBackground
        source={require('../../../assets/images/bgimage.png')}
        style={styles.img}
        resizeMode="stretch">
            <Headers title="Forget Password"/>
        <View>
          <View style={styles.mainContainer}>
            <Text style={styles.headertext}>Forget Password</Text>
            <Text style={styles.desc}>
              Enter your email address to reset password.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Formik
              initialValues={{
                email: '',
              }}
              onSubmit={values => {
                console.log('values', values);
                ResetPassword(values.email);
              }}
              validationSchema={yup.object().shape({
                email: yup.string().email().required('Email is required'),
              })}>
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                isValid,
                dirty,
                handleSubmit,
              }) => (
                <View>
                  <TextInputs
                    label="email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    style={styles.textinput}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.inputvalidStyle}>{errors.email}</Text>
                  )}
                  <Button
                    name="ResetPassword"
                    color={isValid && dirty ? colors.projectgreen : '#84ab84'}
                    disableTrue={!(isValid && dirty)}
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>

            {/* <TextInputs style={styles.textinput} label="Email Address" /> */}
            {/* <Button
                color={colors.projectgreen}
                name="Reset Password"
                onPress={() => navigation.navigate('ResetLink')}
              /> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ForgotPassword;
