import {React, useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {borderRadius, colors, fontFamily} from '../styles/variables';
import IonIcon from 'react-native-vector-icons/Ionicons';

const TextInputs = ({label, value, secureTextEntry,keyboardType,placeholder,numberOfLines,style,
  onChangeText,onBlur}) => {
     const [secureText, setSecureText] = useState(true);

  return (
    <View style>
      <TextInput
      
    //   right={<TextInput.Icon name="email" />}
    right={<IonIcon name='eye-off-outline' ></IonIcon>}
        style={style}
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onBlur={onBlur}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline
        numberOfLines={numberOfLines}
        mode="outlined"
        outlineColor="#FFFFFF50"
        placeholderTextColor={'#FFFFFF'}
        activeOutlineColor={colors.halfwhite}        
        theme={{
          colors: {text: '#E1DDDD', placeholder: '#FFFFFF50'},
          fonts: {text:fontFamily.bold,placeholder:fontFamily.regular},
          roundness: borderRadius.large,
          
          
        }}
      ></TextInput>
    </View>
  );
};
export default TextInputs;
