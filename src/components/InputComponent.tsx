import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
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
  children,
  onChangeText,
  placeholderTextColor,
  marginBottom,
}: IProps) {
  return (
    <View style={[styles.mainbox, {marginBottom: marginBottom}]}>
      <TextInput
        style={styles.inputStyles}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 16,
  },
  mainbox: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputStyles: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    marginRight: 16,
    marginLeft: 16,
    borderRadius: 8,
    paddingLeft: 30,
    backgroundColor: '#F5F5F5',
    fontFamily: 'SFProText-regular',
    fontSize: 16,
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