import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../EventInvitation/components/Header';
import Ev from '../EventInvitation/components/Event';

export default function EventInvitation({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Header />
      </TouchableOpacity>
      <Ev />
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
