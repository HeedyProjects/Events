import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function Pic() {
  return (
    <View style={styles.pic}>
      <Image source={require('../../../assets/Multitasking.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    marginLeft: 35.08,
    marginTop: 88,
    marginBottom: 60,
  },
});
