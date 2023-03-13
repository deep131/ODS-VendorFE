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
import {genderData,stateData,servicePData} from '../../constants/Data';
import Pickers from '../../components/Picker';
import TextInputs from '../../components/TextInputs';
import Button from '../../components/Button';
import Headers from '../../components/Headers';
import {styles} from './ConfirmDetailstyles';

const ConfirmDetail = ({navigation}) => {
  const [service, setSevices] = useState('Unknown');
  const [timePicker, setTimePicker] = useState(false);
  const [timePicker2, setTimePicker2] = useState(false);
  const [gender, setGender] = useState('Unknown');
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [state, setState] = useState('Unknown');
  const [time, setTime] = useState(new Date(Date.now()));
  const [time2, setTime2] = useState(new Date(Date.now()));

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

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
        <View>
        <Headers title="Register"/>
          <ScrollView>
            <View style={styles.mainContainer}>
              <Text style={styles.headertext}>Confirm Details</Text>
              <Text style={styles.desc}>
                Please confirm your perosnal details.
              </Text>
            </View>

            <View style={styles.inputFiled}>
              <TextInputs style={styles.textinput} label="Vendor Name" />
              <TextInputs
                style={styles.textinput}
                label="Email"
                keyboardType={'email-address'}
              />
              <TextInputs
                style={styles.textinput}
                label="Mobile no"
                keyboardType={'numeric'}
              />
              <TextInputs
                style={styles.textinput}
                label="Password"
                secureTextEntry={true}
              />
              <TextInputs
                style={styles.textinput}
                label="Confirm Password"
                secureTextEntry={true}
              />
              <View style={styles.row}>
                <View style={styles.hafBox}>
                  <View style={styles.subTitle}>
                    <Text style={{color: colors.halfwhite}}>Gender</Text>
                  </View>

                  {/* <Picker
                    selectedValue={gender}
                    onValueChange={(value, index) => setGender(value)}
                    mode="dropdown"
                    dropdownIconColor={'#FFFFFF'}
                    style={{color: 'white'}}>
                    <Picker.Item
                      label=" Gender"
                      value="Unknown"
                      enabled={true}
                    />
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                  </Picker> */}
                   <Pickers selectedValue={gender} onValueChange={(value)=>setGender(value)} data={genderData}/>
                </View>

                <View style={styles.dateStyle}>
                  {datePicker && (
                    <DateTimePicker
                      value={date}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={onDateSelected}
                    />
                  )}
                  <View style={styles.subTitle}>
                    <Text style={{color: colors.halfwhite}}>Date of Birth</Text>
                  </View>
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={showDatePicker}>
                    <Text style={styles.datetostring}>
                      {date.toDateString()}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TextInputs style={styles.textinput} label="Current address" />
              <View style={styles.row}>
                <TextInputs
                  style={styles.zipinput}
                  label="Zip Code"
                  keyboardType={'numeric'}
                />

                <View style={styles.stateContainer}>
                  <View style={styles.subTitle}>
                    <Text style={{color: colors.halfwhite}}>State</Text>
                  </View>

                  {/* <Picker
                    selectedValue={state}
                    onValueChange={(value, index) => setState(value)}
                    mode="dropdown"
                    dropdownIconColor={'#FFFFFF'}
                    style={{color: 'white'}}>
                    <Picker.Item
                      label=" Abu Dhabi"
                      value="Unknown"
                      enabled={true}
                    />
                    <Picker.Item label="Dubai" value="Dubai" />
                    <Picker.Item label="Sharjah" value="Sharjah" />
                  </Picker> */}
                   <Pickers
                    selectedValue={state}
                    onValueChange={value => setState(value)}
                    data={stateData}
                  />
                </View>
              </View>

              <View style={styles.line} />
              <TextInputs style={styles.textinput} label="Store Name" />
              <TextInputs style={styles.textinput} label="Store Address" />
              <View style={styles.top}>
                <View style={styles.service}>
                  <View style={styles.subTitle}>
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
              <View style={styles.row}>
                <View style={[styles.hafBox, {justifyContent: 'center'}]}>
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

                <View style={[styles.hafBox, {justifyContent: 'center'}]}>
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
              <TextInputs style={styles.textinput} label="GST/TIN No" />
              <TextInputs style={styles.textinput} label="Description" />
              <View style={styles.line} />

              <Button color={colors.bluebtn} name="Upload Document" />
              <View style={styles.docview}>
                <Image
                  style={{height: 40, width: 40, tintColor: colors.white}}
                  source={require('../../assets/images/document.png')}
                />
                <Text style={styles.doctext}>abcd</Text>
                <Image
                  style={{height: 40, width: 40}}
                  source={require('../../assets/images/tick.png')}
                />
              </View>
              <View style={styles.line} />
              <TextInputs style={styles.textinput} label="Account Name" />
              <TextInputs
                style={styles.textinput}
                label="Account Number"
                keyboardType={'email-address'}
              />
              <TextInputs style={styles.textinput} label="Bank Code" />
              <TextInputs
                style={styles.textinput}
                label="IBAN Number"
                keyboardType={'numeric'}
              />

              <Button
                color={colors.projectgreen}
                name="Register"
                onPress={() => navigation.navigate('SuccessRegister')}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ConfirmDetail;
