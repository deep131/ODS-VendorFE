import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles/variables';
import Button from '../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import Models from '../../components/Model';
import Headers from '../../components/Headers';
import {styles} from './KycProfilestyles';

const KycProfile = ({navigation}) => {
  const [multipleFile, setMultipleFile] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onRequestClose = () => {
    setModalVisible(!modalVisible);
  };
  const onPressClose = () => {
    setModalVisible(!modalVisible);
  };

  const selectMultipleFile = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      for (const res of results) {
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
      }

      setMultipleFile(results);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from multiple doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.rendersBoxStyle}>
      <View style={styles.row}>
        <Image source={require('../../assets/images/doc.png')} />
        <Text style={styles.docTitle}>{item.name}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.boxView}>
          <Image source={require('../../assets/images/pen.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxView}
          onPress={() => setModalVisible(true)}>
          <Image source={require('../../assets/images/trash.png')} />
        </TouchableOpacity>
      </View>
    </View>
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
        style={[styles.img, {overflow: 'visible'}]}
        resizeMode="stretch">
          <Headers title="KYC" />
        <View style={styles.docContainerStyle}>
          <TouchableOpacity onPress={selectMultipleFile} activeOpacity={0.8}>
            <Image
              source={require('../../assets/images/selectcircle.png')}
              style={styles.selectLogo}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Upload Documents</Text>
          <Text style={styles.subTitle}>
            You can upload documents by importing or scanning with your camera.
          </Text>
        </View>

        <View>
          <FlatList
            nestedScrollEnabled={true}
            data={multipleFile}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
          />
          <Models
            visible={modalVisible}
            onPressClose={onPressClose}
            onRequestClose={onRequestClose}
          />
        </View>
        <Button
          position="absolute"
          name="Update"
          color={colors.bacgray}
          bottom={50}
        />
      </ImageBackground>
    </View>
  );
};
export default KycProfile;
