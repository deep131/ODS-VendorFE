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
import DateTimePicker from '@react-native-community/datetimepicker';
import {servicePData} from '../../constants/Data';
import Pickers from '../../components/Picker';
import TextInputs from '../../components/TextInputs';
import Button from '../../components/Button';
import Headers from '../../components/Headers';
import {styles} from './AddServicestyles';

const AddService = ({navigation}) => {
  const [service, setSevices] = useState('Unknown');
  const [timePicker, setTimePicker] = useState(false);
  const [timePicker2, setTimePicker2] = useState(false);
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
        <Headers title="Add Services" />
        <View>
          <ScrollView>
            <View style={styles.mainContainer}>
              <View style={styles.pickerContainer}>
                <View style={styles.subTitle}>
                  <Text style={{color: colors.halfwhite}}>Select category</Text>
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

              <View style={styles.top}>
                <View style={styles.pickerContainer}>
                  <View style={styles.subTitle}>
                    <Text style={{color: colors.halfwhite}}>
                      Select sub-category
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

              <TextInputs style={styles.textinput} label="Service Name" />

              <View style={styles.timeRow}>
                <View style={styles.timeContainer}>
                  <View style={styles.subTitle}>
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

                <View style={styles.timeContainer}>
                  {timePicker2 && (
                    <DateTimePicker
                      value={time2}
                      mode={'time'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={false}
                      onChange={onTimeSelected2}
                    />
                  )}
                  <View style={styles.subTitle}>
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
              <TextInputs style={styles.bigtextinput} label="Service details" />

              <View style={styles.timeRow}>
                <View style={styles.timeContainer}>
                  <View style={styles.subTitle}>
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

                <View style={styles.timeContainer}>
                  {timePicker2 && (
                    <DateTimePicker
                      value={time2}
                      mode={'time'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={false}
                      onChange={onTimeSelected2}
                    />
                  )}
                  <View style={styles.subTitle}>
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

              <View style={styles.fileContainer}>
                <Image
                  style={styles.selectLogo}
                  source={require('../../assets/images/imagess.png')}></Image>

                <Text style={styles.bigtext}>Upload Images</Text>
                <Text style={styles.uploadText}>
                  Please Upload your service images...
                </Text>

                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.chfile}>Choose File</Text>
                </TouchableOpacity>
              </View>

              <Button
                color={colors.projectgreen}
                name="Add "
                onPress={() => navigation.navigate('MyService')}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
export default AddService;
