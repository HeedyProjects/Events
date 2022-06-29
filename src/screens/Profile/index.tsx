import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Email from '../Profile/Email';
import Name from '../Profile/Name';
import Birth from '../Profile/Birth';
import Head from '../Profile/Head';
import But from '../Profile/Button';
import Password from '../Profile/Password';
import PasswordAgain from '../Profile/PasswordAgain';
import AddPhoto from '../Profile/AddPhoto';

export default function Profile({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Head />
      </TouchableOpacity>
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
    paddingLeft: 9,
    paddingRight: 9,
  },
});
