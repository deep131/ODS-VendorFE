import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {colors} from '../../styles/variables';
import Headers from '../../components/Headers';
import {styles} from './SuccessRegisterstyles';

const SuccessRegister = ({navigation}) => {
 
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn'); 
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}], 
      });
    }, 3000);
  }, []);

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
        resizeMode="stretch"
      >
        <View>
        <Headers title="Register Successfully" icon=''/>
          
          <View style={styles.mainConatainer}>
            <Image
              style={styles.successimage}
              source={require('../../assets/images/success.png')}
            />
            <Text style={styles.headertext}>Awesome!</Text>
            <Text style={styles.desc}>
              Your account has been successfully created
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default SuccessRegister;
