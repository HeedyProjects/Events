import React from 'react';
import {StyleSheet, SafeAreaView, View, TextInput} from 'react-native';
import InputComponent from '../../components/InputComponent';
import CustomText from '../../components/CustomText';
import BellIcon from '../../../assets/SVG/BellIcon.svg';
import SearchIcon from '../../../assets/SVG/searchIcon.svg';
export default function Events() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bellIconWrapper}>
        <BellIcon />
      </View>
      <CustomText style={styles.text} textType="SFProDisplayBold">
        События
      </CustomText>
      <InputComponent placeholder={'Найти'}>
        <View style={styles.svgWrapper}>
        <SearchIcon />
        </View>
      
      </InputComponent>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  svgWrapper: {
    position: 'absolute',
    left: 20,
  },
  
  inputWrapper: {
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 16,
  },
  text: {
    fontSize: 34,
    marginLeft: 16,
    marginBottom: 18,
  },
  bellIconWrapper: {
    marginRight: 22,
    marginLeft: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
