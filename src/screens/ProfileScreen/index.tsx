import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomText from '../../components/CustomText';
import Head from '../ProfileScreen/Head';
import Info from '../ProfileScreen/Info';
import Notifications from '../ProfileScreen/Notifications';
import Link from '../ProfileScreen/Link';
const title = 'Профиль';

export default function Events() {
  return (
    <View style={styles.container}>
      <Head />
      <CustomText textType="SFProDisplayBlack" style={styles.title}>
        {title}
      </CustomText>
      <View style={styles.frame}>
        <Info />
      </View>
      <Notifications />
      <Link />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 28,
    margin: 10,
    marginTop: 20,
    marginLeft: 12,
  },

  frame: {
    borderColor: 'lightgrey',
    borderRadius: 9,
    borderWidth: 1,
    marginLeft: 12,
    marginRight: 12,
    margin: 10,
    padding: 45,
  },
});
