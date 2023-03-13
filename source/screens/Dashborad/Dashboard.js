import React from 'react';
import {View, Image, Text, StatusBar, ImageBackground} from 'react-native';
import {colors} from '../../styles/variables';
import Button from '../../components/Button';
import Headers from '../../components/Headers';
import {styles} from './Dashboardstyles';

const Dashboard = ({navigation}) => {
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
        <View>
        <Headers title="Dashboard" icon='' />
          {/* <Text style={styles.welcomeText}>Dashboard</Text> */}
          <View style={styles.dashboardImg}>
            <Image
              style={styles.successimage}
              source={require('../../assets/images/dashboardimg.png')}
            />
            <Text style={styles.headertext}>Congratulations!</Text>
            <Text style={styles.desc}>
              Your KYC has been completed. Please add your first service.
            </Text>
          </View>
          <Button
            color={colors.projectgreen}
            name="Add Services"
            onPress={() => navigation.navigate('Services')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default Dashboard;
