import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import CustomText from '../../../components/CustomText';
import Event from '../../../../assets/SVG/Event.svg';
import GreyBell from '../../../../assets/SVG/GreyBell.svg';
import RingingBell from '../../../../assets/SVG/RingingBell.svg';
import InputComponent from '../../../components/InputComponent';

export default function Ev() {
  return <SafeAreaView style={styles.pic} />;
}

const styles = StyleSheet.create({
  pic: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    marginBottom: 8,
    letterSpacing: -0.08,
    color: '#333333',
  },
});
