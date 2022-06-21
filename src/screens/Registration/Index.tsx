import React from 'react';
import {View, StyleSheet} from 'react-native';
import Head from '../Registration/Head';
import AddPhoto from '../Registration/AddPhoto';
import Name from '../Registration/Name';
import Birth from '../Registration/Birth';
import Email from '../Registration/Email';
import Password from '../Registration/Password';
import PasswordAgain from '../Registration/PasswordAgain';
import Button from '../Registration/Button';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View>
        <Head />
        <AddPhoto />
      </View>
      <Name />
      <Birth />
      <Email />
      <Password />
      <PasswordAgain />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  forgot: {
    color: '#F8A53B',
    margin: 10,
    marginLeft: 200,
  },
});
