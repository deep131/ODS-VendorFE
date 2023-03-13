import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import {colors} from '../../../styles/variables';
import TextInputs from '../../../components/TextInputs';
import Button from '../../../components/Button';
import Headers from '../../../components/Headers';
import * as yup from 'yup';
import {Formik} from 'formik';
import {styles} from './NewPasswordstyles';

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

const NewPassword = ({navigation}) => {
  
  const SavePassword = async (password,confrompassword) => {
    console.log('p,cp',password);
    if( password && confrompassword){
      console.log("navigate here");
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
              <Text style={styles.headertext}>Set new Password</Text>
              <Text style={styles.desc}>Create strong and secure password</Text>
            </View>
            <View style={{paddingBottom: 100, alignSelf: 'center'}}>

              <Formik
                initialValues={{
                  password: '',
                  confrompassword: '',
                }}
                onSubmit={values => {
                  console.log('values', values);
                  SavePassword(values.password,values.confrompassword);
                }}
                validationSchema={yup.object().shape({
                  password: yup
                    .string()
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                      'Minimum 8 char,at least one uppercase-lowercase-number-special character',
                    )
                    .required('Password is required'),
                    confrompassword: yup
                    .string()
                    .oneOf([yup.ref('password')], 'Passwords do not match')
                    .required('Confirm password is required'),
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
                      label="Password"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={() => setFieldTouched('password')}
                      style={styles.textinput}
                      secureTextEntry={true}
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.inputvalidStyle}>
                        {errors.password}
                      </Text>
                    )}
                     <TextInputs
                      label="Conform Password"
                      value={values.confrompassword}
                      onChangeText={handleChange('confrompassword')}
                      onBlur={() => setFieldTouched('confrompassword')}
                      style={styles.textinput}
                      secureTextEntry={true}
                    />
                    {touched.confrompassword && errors.confrompassword && (
                      <Text style={styles.inputvalidStyle}>
                        {errors.confrompassword}
                      </Text>
                    )}

                    <Button
                      name="SavePassword"
                      color={isValid && dirty ? colors.projectgreen : '#84ab84'}
                      disableTrue={!(isValid && dirty)}
                      onPress={handleSubmit}
                    />
                  </View>
                )}
              </Formik>
              {/* <TextInputs style={styles.textinput} label="Email Address" />
              <TextInputs style={styles.textinput} label="Password" />
              <Button
                color={colors.projectgreen}
                name="Save Password"
                // onPress={Dashboard}
              /> */}
            </View>

        </View>
      </ImageBackground>
    </View>
  );
};
export default NewPassword;
