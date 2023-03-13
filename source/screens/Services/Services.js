import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles/variables';
import Headers from '../../components/Headers';
import {styles} from './Servicesstyles';

const Services = ({navigation}) => {
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
          <Headers title="My Services" icon='' />
        <View>
          <View style={styles.mainContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('AddService');
              }}>
              <Image
                style={styles.successimage}
                source={require('../../assets/images/selectimg.png')}
              />
            </TouchableOpacity>
            <Text style={styles.headertext}>Add Services</Text>
            <Text style={styles.desc}>
              You can add multiple services by clickng above plus button.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Services;
