import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Email from '../InviteScreen/Email';
import Head from '../InviteScreen/Head';
import Write from '../InviteScreen/Write';
import Button from '../InviteScreen/Button';

export default function InviteScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Head />
      </TouchableOpacity>

      <Email />
      <Write />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
