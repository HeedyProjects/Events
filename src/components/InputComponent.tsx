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
  backgroundColor: backgroundColor,
  borderWidth: number,
}
export default function InputComponent({
  placeholder,
  onChangeText,
  placeholderTextColor,
<<<<<<< HEAD
=======
  marginBottom,
  backgroundColor,
  borderWidth,
>>>>>>> origin/dmitriy/EventScreen
}: IProps) {
  return (
    <View>
      <View style={styles.svgWrapper}>
        <SearchIcon />
      </View>
      <TextInput
        style={[
          styles.inputStyles,
          {backgroundColor: backgroundColor, borderWidth: borderWidth},
        ]}
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
<<<<<<< HEAD
    backgroundColor: '#F5F5F5',
=======
>>>>>>> origin/dmitriy/EventScreen
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
