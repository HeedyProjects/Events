import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
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

      <Info />

      <Notifications />
      <Link />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.FRIENDS_SCREEN_BACKGROUND,
  },

  title: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.37,
    color: colors.SCREEN_TITLE,
    marginLeft: 15,
  },

  frame: {
    borderColor: 'lightgrey',
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 16,
    marginTop: 24,
    padding: 45,
  },
});
