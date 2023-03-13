import React, {useEffect} from 'react';
import {View, Text, Image,StatusBar} from 'react-native';
import { colors } from '../../styles/variables';
import {styles} from './splashstyles';

const Splash = ({navigation}) => {
  
<StatusBar 
hidden={true}
barStyle={"dark-content"} />
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Register'); //Navigate to your destination screen
      navigation.reset({
        index: 0,
        routes: [{name: 'Register'}], //Remove the custom screen from history
      });
    }, 5000); // set your time out here in miliseconds
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar  
                    backgroundColor ={colors.black}  
                    barStyle = "light-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
      <Image
        style={styles.logo}
        source={require('../../../source/assets/images/odslogo.png')}
      />
      <Text style={styles.logotext}>On Demand Service</Text>
    </View>
  );
};
export default Splash;
