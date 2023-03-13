import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles/variables';
import {profileData} from '../../constants/Data'
import Headers from '../../components/Headers';
import {styles} from './Profilestyles';

const Profile = ({navigation}) => {
  const renderPress = item => {
    if (item.id == 5) {
      navigation.navigate('Setting');
    }
    if(item.id == 1){
      navigation.navigate('kycProfile')
    }
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.rendersBoxStyle}
      onPress={() => renderPress(item)}>
      <View style={styles.renderStyle}>
        <Image source={item.logo} style={styles.LeftLogo} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {item.flag ? (
        <View style={styles.backIconStyle}>
          <Image source={require('../../assets/images/back.png')} />
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );

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
              <Headers title="Profile" icon=''/>
        <ImageBackground
          style={styles.dottedlogo}
          source={require('../../assets/images/dotcircle.png')}>
          <Image
            style={styles.circleLogo}
            source={require('../../assets/images/profileuser.png')}
          />
          <View style={styles.touchlogo}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/pencircle.png')} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

          <FlatList
            data={profileData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
          />
      </ImageBackground>
    </View>
  );
};
export default Profile;
