import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {colors} from '../../../styles/variables';
import CheckBox from '@react-native-community/checkbox';
import TextInputs from '../../../components/TextInputs';
import Button from '../../../components/Button';
import Headers from '../../../components/Headers';
import * as yup from 'yup';
import {Formik} from 'formik';
import {styles} from './SignInStyles';
import { ODSLoginAPI } from '../../../utils/service';
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

const SignIn = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [Form, setForm] = useState({
    countryCode: '91',
    countryImage: 'IN',
    phone: '6354622857',
    password: '1harsh',
  });
  const Login = async (email, password) => {
    console.log('e,p', email, password);
    if(email && password){
      navigation.navigate('Tabs')
    }
  };

  const APICall = async () => {
    const phone = '+' + Form.countryCode + Form.phone;
    const password = Form.password;

    const loginRequestApi = await ODSLoginAPI({
      phone,
      password,
    });



    if (loginRequestApi?.status === 200) {
      Form.phone = '';
      Form.password = '';
      console.log("hit",loginRequestApi);
      // AsyncStorage.setItem('login', 'true');
      // dispatch(tokenStorage('TOKEN_AS_USER') );
       navigation.navigate( 'Tabs');
    } else {
      showToast(loginRequestApi.msg);
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
        resizeMode="stretch"
      >
        <View>
            <Headers title="Sign In" icon=''/>
            <View style={styles.mainContainer}>
              <Text style={styles.headertext}>Let’s Sign In</Text>
              <Text style={styles.desc}>Welcome back, you’ve been missed!</Text>
            </View>
            <View style={styles.inputContainer}>
{/* formik */}


<Formik
initialValues={{
  email: '',
  password: '',
}}
onSubmit={values => {
  console.log('values', values);
  Login(values.email,values.password)
}}

validationSchema={yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup
  .string()
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,'Minimum 8 char,at least one uppercase-lowercase-number-special character')
  .required('Password is required')
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
      value={Form.phone}
keyboardType='numeric'
      onChangeText={value=>{ setForm({...Form, phone: value})}}
      onBlur={() => setFieldTouched('email')}
      style={styles.textinput}
    />
    {touched.email && errors.email && (
      <Text style={styles.inputvalidStyle}>
        {errors.email}
      </Text>
    )}
      <TextInputs
      label="Password"
      value={Form.password}

      onChangeText={value=>{ setForm({...Form, password: value})}}

      onBlur={() => setFieldTouched('password')}
      style={styles.textinput}
      secureTextEntry={true}
    />
    {touched.password && errors.password && (
      <Text style={styles.inputvalidStyle}>
        {errors.password}
      </Text>
    )}
  <View
                style={styles.bottomview}
              >
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  style={{
                    transform: [{scaleX: 1.2}, {scaleY: 1.2}],
                  }}
                  tintColors={{true: colors.darkPrimary,false:colors.white}}
                  tintColor={colors.darkPrimary}
                  lineWidth={0.5}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text
                  style={styles.text}
                >
                  Remember me
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}
                  style={{alignSelf: 'center'}}
                  activeOpacity={0.5}
                >
                  <Text style={styles.forgetText}>
                    Forgot Password ?
                  </Text>
                </TouchableOpacity>
              </View>
    <Button
      name="Login"
      color={colors.projectgreen }
    
      onPress={APICall}
    />
  </View>
)}
</Formik>

{/* formik */}

              {/* <TextInputs style={styles.textinput} label="Email Address" /> */}
              {/* <TextInputs style={styles.textinput} label="Password" /> */}
              {/* <Button
                color={colors.projectgreen}
                name="Login"
                onPress={()=>navigation.navigate('Tabs')}
              /> */}
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default SignIn;
