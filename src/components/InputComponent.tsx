import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
// import CustomText from './CustomText';
interface IProps {
  placeholder?: string;
  onChangeText?: any;
  keyboardType?: any;
  value?: any;
  children?: React.ReactNode;
}
export default function InputComponent({
  placeholder,
  children,
  onChangeText,
}: IProps) {
  return (
    <View style={styles.mainbox}>
      <TextInput
        style={styles.inputStyles}
        onChangeText={onChangeText}
        placeholder={placeholder}
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
    borderWidth: 1,
    marginRight: 16,
    marginLeft: 16,
    borderRadius: 8,
    paddingLeft: 30,
    backgroundColor: '#F5F5F5'
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