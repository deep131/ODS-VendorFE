import {React} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Pickers = ({selectedValue, onValueChange,data}) => {
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(value, index) => onValueChange(value)}
        mode="dropdown"
        dropdownIconColor={'#FFFFFF'}
        style={{color: 'white'}}
        >
        {data.map(i => (
          <Picker.Item  key={i} label={i.label} value={i.value} />
        ))}
      </Picker>
    </View>
  );
};


export default Pickers;
