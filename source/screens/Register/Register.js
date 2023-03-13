import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles/variables';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInputs from '../../components/TextInputs';
import Button from '../../components/Button';
import {genderData, stateData} from '../../constants/Data';
import Headers from '../../components/Headers';
import Pickers from '../../components/Picker';
import {styles} from './Registerstyle';

const Register = ({navigation}) => {
  const [gender, setGender] = useState('Unknown');
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [state, setState] = useState('Unknown');

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }
  const store = () => {
    navigation.navigate('Store');
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
          <Headers title="Register" icon="" />

          <ScrollView>
            <View style={styles.left}>
              <Text style={styles.headertext}>Vendor Details</Text>
              <Text style={styles.desc}>
                Seems you are new here, Let’s set up your profile.
              </Text>
            </View>
            <View style={styles.inputContainer}>
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
              <View style={styles.genderContainer}>
                <View style={styles.genderViewcontainer}>
                  <View style={styles.genderStyle}>
                    <Text style={styles.genderTitle}>Gender</Text>
                  </View>
                  {/* 
                  <Picker
                    selectedValue={gender}
                    onValueChange={(value, index) => setGender(value)}
                    mode="dropdown"
                    dropdownIconColor={'#FFFFFF'}
                    style={{color: 'white'}}>

                    <Picker.Item label="Gender" value="Unknown" enabled={true}/>
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                  </Picker> */}

                  <Pickers
                    selectedValue={gender}
                    onValueChange={value => setGender(value)}
                    data={genderData}
                  />
                </View>

                <View style={styles.datesContainer}>
                  {datePicker && (
                    <DateTimePicker
                      value={date}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={onDateSelected}
                    />
                  )}
                  <View style={styles.dateTitleContainer}>
                    <Text style={styles.datesTitle}>Date of Birth</Text>
                  </View>
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={showDatePicker}>
                    <Text style={styles.dateString}>{date.toDateString()}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TextInputs style={styles.textinput} label="Current address" />
              <View style={styles.zipContainer}>
                <TextInputs
                  style={styles.zipinput}
                  label="Zip Code"
                  keyboardType={'numeric'}
                />

                <View style={styles.stateContainer}>
                  <View style={styles.stateLabel}>
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

              <Button
                color={colors.projectgreen}
                name="continue"
                onPress={store}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Register;
