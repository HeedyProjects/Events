import React from 'react';
import {View, StyleSheet} from 'react-native';
import Email from '../EditProfile';
import Name from '../EditProfile';
import Birth from '../EditProfile';
import Head from '../EditProfile';
import But from '../EditProfile';
import Password from '../EditProfile';
import PasswordAgain from '../EditProfile';
import AddPhoto from '../EditProfile';

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <Head />
      <AddPhoto />
      <Name />
      <Birth />
      <Email />
      <Password />
      <PasswordAgain />
      <But />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
