import React, {StatusBar} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colors,tabHeight,borderRadius,fontFamily,fontSize } from '../styles/variables';
import {View, Text,Image} from 'react-native';
import SignIn from '../screens/Login/LoginHere/SignIn';
import { color } from 'react-native-reanimated';
import IonIcon from 'react-native-vector-icons/Ionicons';      
import Dashboard from '../screens/Dashborad/Dashboard';
import Services from '../screens/Services/Services';
import Profile from '../screens/Profile/Profile';

 const Tab = createBottomTabNavigator();

const Tabs = ({navigation}) => {
  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: colors.white,

    tabBarStyle: {
      backgroundColor: colors.black,
      height: Platform.OS === 'ios' ? tabHeight + 25 : tabHeight,

      shadowOffset: {width: 1, height: 3},
      elevation: 10,
      color:colors.white
    },

    tabBarShowLabel: true,

    tabBarItemStyle: {
      margin: 5,
    },
    tabBarLabelStyle: {
      fontFamily: fontFamily.medium,
      fontSize: fontSize.extraSmall,
      marginBottom: Platform.OS === 'ios' ? 8 : 0,
    },
  };

  const TabView = ({focused, source}) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center',flex:1,flexGrow:1}}>
        <IonIcon
          name={source}
          style={{
            color: focused ? colors.white : '#AFB2B5',
          }}
          size={24}
        />
      </View>
    );
  };
  return (

  
    <Tab.Navigator screenOptions={screenOptions}>
        
      <Tab.Screen
        name="HOME"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused, horizontal, tintColor}) => (


           <TabView focused={focused} source={`home-outline`} >
            </TabView>
          

          ),
        }}
      />
      <Tab.Screen
        name="ORDERS"
        component={SignIn}
        options={{
          tabBarIcon: ({focused, horizontal, tintColor}) => (
            <TabView focused={focused} source={`document-text-outline`} >
            </TabView>
          ),
        }}
      />
      <Tab.Screen
        name="MY SERVICES"
        component={Services}
        options={{
          tabBarIcon: ({focused}) => (
            <TabView focused={focused} source={`grid-outline`} >
            </TabView>
          ),
        }}
      />
 
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{
          tabBarIcon: ({focused, horizontal, tintColor}) => (
            <TabView focused={focused} source={`person-circle-outline`} >
            </TabView>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
