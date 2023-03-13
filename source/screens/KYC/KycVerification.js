import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles/variables';
import Button from '../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import Headers from '../../components/Headers';
import {styles} from './Kycverificationstyles';

const KycVerification = ({navigation}) => {
  const [multipleFile, setMultipleFile] = useState([]);

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
        <Headers title="Register"/>
          <View style={styles.mainContainer}>
            <Text style={styles.headertext}>KYC Verification</Text>
            <Text style={styles.desc}>1. ID Proof</Text>
            <Text style={styles.subDesc}> (eg. Driving License)</Text>
            <Text style={styles.desc}>2. Passport Photo</Text>
            <Text style={styles.desc}>3. Store Documents</Text>
          </View>
          <TouchableOpacity onPress={selectMultipleFile} activeOpacity={0.8}>
            <Image
              style={styles.uploadImg}
              source={require('../../assets/images/Upload.png')}
            />
          </TouchableOpacity>

          {multipleFile.map((item, key) => (
            <View key={key} style={styles.docview}>
              <Image
                style={styles.docLogo}
                source={require('../../assets/images/document.png')}
              />
              <Text style={styles.doctext}>{item.name ? item.name : ''}</Text>
              <Image
                style={styles.tickLogo}
                source={require('../../assets/images/tick.png')}
              />
            </View>
          ))}
          <Button
            color={colors.projectgreen}
            name="continue"
            onPress={() => navigation.navigate('BankDetails')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default KycVerification;
