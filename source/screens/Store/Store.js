import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles/variables';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {servicePData} from '../../constants/Data';
import Pickers from '../../components/Picker';
import TextInputs from '../../components/TextInputs';
import Button from '../../components/Button';
import Headers from '../../components/Headers';
import {styles} from './Storestyles';

const Store = ({navigation}) => {
  const [service, setSevices] = useState('Unknown');
  const [timePicker, setTimePicker] = useState(false);
  const [timePicker2, setTimePicker2] = useState(false);
  const [ImageSelected, setImageSelected] = useState('');
  const [uploadedImage, setUploadImage] = useState([]);
  const [time, setTime] = useState(new Date(Date.now()));
  const [time2, setTime2] = useState(new Date(Date.now()));

  function showTimePicker() {
    setTimePicker(true);
  }
  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }
  function onTimeSelected2(event, value) {
    setTime2(value);
    setTimePicker(false);
  }
  const OPENPICKER = () => {
    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel != true) {
        setUploadImage(response?.assets[0]);
        setImageSelected(response?.assets[0].uri);
      }
    });
  };
  const OpenCamera = () => {
    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, response => {
      if (response.didCancel != true) {
        setUploadImage(response?.assets[0]);
        setImageSelected(response?.assets[0].uri);
      }
    });
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
          <Headers title="Register" />

          <ScrollView contentContainerStyle={{}}>
            <View style={styles.left}>
              <Text style={styles.headertext}>Store Details</Text>
              <Text style={styles.desc}>
                Seems you are new here, Let’s set up your profile.
              </Text>
            </View>
            <View style={styles.imageContainer}>
              {ImageSelected ? (
                <Image
                  source={{uri: ImageSelected}}
                  style={styles.imageStyle}
                />
              ) : (
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/images/dummyimage.png')}
                />
              )}
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.imgPress}
                onPress={() => OPENPICKER()}>
                <Image
                  source={require('../../assets/images/camara.png')}
                  style={styles.logo}
                />
              </TouchableOpacity>
              <TextInputs style={styles.textinput} label="Store Name" />
              <TextInputs style={styles.textinput} label="Store Address" />

              <View style={styles.storeCategory}>
                <View style={styles.service}>
                  <View style={styles.storeLabel}>
                    <Text style={{color: colors.halfwhite}}>
                      Store Category
                    </Text>
                  </View>
                  {/* <Picker
                    selectedValue={service}
                    onValueChange={(value, index) => setSevices(value)}
                    mode="dropdown"
                    dropdownIconColor={'#FFFFFF'}
                    style={{color: 'white'}}>
                    <Picker.Item
                      label=" Services"
                      value="Unknown"
                      enabled={true}
                    />
                    <Picker.Item label="Cleaning" value="Cleaning" />
                    <Picker.Item label="Appliences" value="Appliences" />
                    <Picker.Item label="Saloon" value="Saloon" />
                  </Picker> */}
                  <Pickers
                    selectedValue={service}
                    onValueChange={value => setSevices(value)}
                    data={servicePData}
                  />
                </View>
              </View>
              <View style={styles.timeConatiner}>
                <View style={styles.timeBox}>
                  <View style={styles.timeLabel}>
                    {timePicker && (
                      <DateTimePicker
                        value={time}
                        mode={'time'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={false}
                        onChange={onTimeSelected}
                      />
                    )}

                    <Text style={{color: colors.halfwhite}}>Start-Time</Text>
                  </View>
                  <TouchableOpacity onPress={showTimePicker}>
                    <Text style={styles.timeTitle}>
                      {' '}
                      {time.toLocaleTimeString('en-US')}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.timeBox}>
                  {timePicker2 && (
                    <DateTimePicker
                      value={time2}
                      mode={'time'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={false}
                      onChange={onTimeSelected2}
                    />
                  )}
                  <View style={styles.timeLabel}>
                    <Text style={{color: colors.halfwhite}}>End-Time</Text>
                  </View>
                  <TouchableOpacity onPress={showTimePicker}>
                    <Text style={styles.timeTitle}>
                      {' '}
                      {time2.toLocaleTimeString('en-US')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TextInputs style={styles.textinput} label="GST/TIN No" />
              <TextInputs style={styles.textinput} label="Description" />

              <Button
                color={colors.projectgreen}
                name="continue"
                onPress={() => navigation.navigate('KycVerification')}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Store;
