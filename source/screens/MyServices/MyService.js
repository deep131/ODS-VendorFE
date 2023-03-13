import React, {useState} from 'react';
import {View,StatusBar, ImageBackground, FlatList} from 'react-native';
import {colors} from '../../styles/variables';
import Card from '../../components/Card';
import Models from '../../components/Model';
import {serviceData} from '../../constants/Data';
import Headers from '../../components/Headers';
import {styles} from './MyServicestyles';

const MyService = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onRequestClose = () => {
    setModalVisible(!modalVisible);
  };
  const onPressClose = () => {
    setModalVisible(!modalVisible);
  };

  const renderItem = ({item}) => (
    <Card
      title={item.title}
      subTitle={item.subTitle}
      subTitle2={item.subTitle2}
      onPressDelete={() => setModalVisible(true)}
    />
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
            <Headers title="My Services" />
        <View>
          <View style={styles.mainContainer}>
            <Models
              visible={modalVisible}
              onPressClose={onPressClose}
              onRequestClose={onRequestClose}
            />
            <FlatList
              data={serviceData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.contentContainerStyle}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default MyService;
