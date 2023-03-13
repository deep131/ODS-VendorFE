import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './source/screens/Register/Register';
import Splash from './source/screens/Splash/Splash';
import Store from './source/screens/Store/Store';
import KycVerification from './source/screens/KYC/KycVerification';
import BankDetails from './source/screens/BankDetails/BankDetails';
import ConfirmDetail from './source/screens/ConfirmDetail/ConfirmDetail';
import SuccessRegister from './source/screens/SuccessRegister/SuccessRegister';
import SignIn from './source/screens/Login/LoginHere/SignIn';
import ForgotPassword from './source/screens/Login/ForgotPasssword/ForgotPassword';
import ResetLink from './source/screens/Login/ResetLink';
import NewPassword from './source/screens/Login/SetPassword/NewPassword';
import Tabs from './source/navigation/Tabs';
import Services from './source/screens/Services/Services';
import AddService from './source/screens/AddServices/AddService';
import MyService from './source/screens/MyServices/MyService';
import Profile from './source/screens/Profile/Profile';
import Setting from './source/screens/Setting/Setting';
import Language from './source/screens/Language/Language';
import CustomerSupport from './source/screens/CustomerSupport/CustomerSupport';
import KycProfile from './source/screens/KYCProfile/KycProfile';

const RootStack = createStackNavigator();
const options = {
  headerShown: false,
};

LogBox.ignoreLogs(['Warning: ...']); 

const AuthStack = () => (
  <RootStack.Navigator screenOptions={options}>
    <RootStack.Screen name="Splash" component={Splash} />
    <RootStack.Screen name="SignIn" component={SignIn} />
    <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
    <RootStack.Screen name="Register" component={Register} />
    <RootStack.Screen name="Store" component={Store} />
    <RootStack.Screen name="KycVerification" component={KycVerification} />
    <RootStack.Screen name="BankDetails" component={BankDetails} />
    <RootStack.Screen name="ConfirmDetail" component={ConfirmDetail} />
    <RootStack.Screen name="SuccessRegister" component={SuccessRegister} />
    <RootStack.Screen name="Tabs" component={Tabs} />
    <RootStack.Screen name="Services" component={Services} />
    <RootStack.Screen name="AddService" component={AddService} />
    <RootStack.Screen name="MyService" component={MyService} />
    <RootStack.Screen name="profile" component={Profile} />
    <RootStack.Screen name="kycProfile" component={KycProfile} />
    <RootStack.Screen name="Setting" component={Setting} />
    <RootStack.Screen name="language" component={Language} />
    <RootStack.Screen name="customerSupport" component={CustomerSupport} />
    <RootStack.Screen name="ResetLink" component={ResetLink} />
    <RootStack.Screen name="NewPassword" component={NewPassword} />
  </RootStack.Navigator>
);

const HomeStack = () => {
  <RootStack.Navigator screenOptions={options}></RootStack.Navigator>;
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={options}>
        <RootStack.Screen name="AuthStack" component={AuthStack} />
        <RootStack.Screen name="HomeStack" component={HomeStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
