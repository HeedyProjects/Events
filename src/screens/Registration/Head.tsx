import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Path from '../../../assets/SVG/LeftAccessory.svg';
import colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

export default function Head() {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Path style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.reg}>Регистрация</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    marginTop: 7.61,
    marginLeft: -7,
  },
  reg: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.37,
    color: colors.SCREEN_TITLE,
  },
});
