import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import Head from '../Registration/Head';
import AddPhoto from '../Registration/AddPhoto';
import Name from '../Registration/Name';
import Birth from '../Registration/Birth';
import Email from '../Registration/Email';
import Password from '../Registration/Password';
import PasswordAgain from '../Registration/PasswordAgain';
import Button from '../Registration/Button';

export default function Registration() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 15,
  },
});
