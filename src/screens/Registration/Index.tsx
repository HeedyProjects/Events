import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import Head from './Head';
import AddPhoto from './AddPhoto';
import Name from './Name';
import Birth from './Birth';
import Email from './Email';
import Password from './Password';
import PasswordAgain from './PasswordAgain';
import Button from './Button';

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
