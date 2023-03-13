import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  FlatList,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles/variables';
import Models from '../../components/Model';
import {settingData} from '../../constants/Data';
import Headers from '../../components/Headers';
import {styles} from './Settingstyle';

const Setting = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onRequestClose = () => {
    setModalVisible(!modalVisible);
  };
  const onPressClose = () => {
    setModalVisible(!modalVisible);
  };

  const renderPress = item => {
    if (item.id == 1) {
      navigation.navigate('language');
    }
    if (item.id == 2) {
      navigation.navigate('customerSupport');
    }
    if (item.id == 6) {
      setModalVisible(true);
    }
  };
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.renders} onPress={() => renderPress(item)}>
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
      {item.toggle ? (
        <View style={styles.backIconStyle}>
          <Switch
            trackColor={{false: colors.darkgray, true: colors.projectgreen}}
            thumbColor={isEnabled ? colors.white : colors.white}
            onValueChange={() => setIsEnabled(previousState => !previousState)}
            value={isEnabled}
          />
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
        <Headers title="Settings"/>
        <View style={styles.settingBoxStyle}>
          <Models
            visible={modalVisible}
            onPressClose={onPressClose}
            onRequestClose={onRequestClose}
          />
          <FlatList
            data={settingData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default Setting;
