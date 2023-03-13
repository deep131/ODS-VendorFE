import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles/variables';
import Button from '../../components/Button';
import Headers from '../../components/Headers';
import {styles} from './LoginHere/SignInStyles';

const ResetLink = ({navigation}) => {
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
            <Headers title="Forget Password"/>
        <View>
          <ScrollView contentContainerStyle={{}}>
            <View style={styles.mainContainer}>
              <Text style={styles.headertext}>Reset Link Sent</Text>
              <Text style={styles.desc}>
                We have sent all required instructions details to your email.
              </Text>
            </View>

            <TouchableOpacity style={styles.linkPress} activeOpacity={0.5}>
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate('NewPassword')}>
                Open email Account
              </Text>
            </TouchableOpacity>
            <Button
              color={colors.projectgreen}
              name="Go to SignIn page"
              onPress={() => navigation.navigate('SignIn')}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ResetLink;
