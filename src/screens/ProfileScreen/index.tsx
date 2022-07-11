import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
import Head from '../ProfileScreen/Head';
import Info from '../ProfileScreen/Info';
import Notifications from '../ProfileScreen/Notifications';
import Link from '../ProfileScreen/Link';
import { SafeAreaView } from 'react-native-safe-area-context';
const title = 'Профиль';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.paddings}>
      <Head />
      <CustomText textType="SFProDisplayBlack" style={styles.title}>
        {title}
      </CustomText>

      <Info />

      <Notifications />

      <Link />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.FRIENDS_SCREEN_BACKGROUND,
  },
  paddings: {
    paddingTop: 26
  },
  title: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.37,
    color: colors.SCREEN_TITLE,
    marginLeft: 15,
  },
});
