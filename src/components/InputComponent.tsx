import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import SearchIcon from '../../assets/SVG/searchIcon.svg';
interface IProps {
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: any;
  keyboardType?: any;
  marginBottom?: number;
  value?: any;
  children?: React.ReactNode;
}
export default function InputComponent({
  placeholder,
  onChangeText,
  placeholderTextColor,
}: IProps) {
  return (
    <View>
      <View style={styles.svgWrapper}>
        <SearchIcon />
      </View>
      <TextInput
        style={styles.inputStyles}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyles: {
    borderRadius: 8,
    paddingLeft: 40,
    backgroundColor: '#F5F5F5',
    fontFamily: 'SFProText-regular',
    fontSize: 16,
    marginBottom: 24,
    paddingBottom: 8,
    paddingTop: 8,
  },
  svgWrapper: {
    position: 'absolute',
    left: 12,
    top: 8,
    zIndex: 1,
  },
});
