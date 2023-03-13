import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles/variables';
import {languageData} from '../../constants/Data';
import Headers from '../../components/Headers';
import {styles} from './Languagestyle';

const Language = ({navigation}) => {
  const [updateData, setUpdateData] = useState(languageData);

  const renderPress = item => {
    const modifiedData = languageData.map(e => {
      return e.id === item.id ? {...e, isSelected: !e.isSelected} : e;
    });
    setUpdateData(modifiedData);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{backgroundColor: item.isSelected ? colors.blue1 : colors.nocolor}}
      onPress={() => renderPress(item)}>
      <View style={styles.rendersBoxStyle}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
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
        style={[styles.img]}
        resizeMode="stretch">
        <Headers title="Language"/>
        <FlatList
          data={updateData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </View>
  );
};
export default Language;
