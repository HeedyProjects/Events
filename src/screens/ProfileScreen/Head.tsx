import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Group from '../../../assets/SVG/Group.svg';
import CustomText from '../../components/CustomText';
import auth from '@react-native-firebase/auth';
import colors from '../../utils/colors';
const title = 'Выйти';

export default function Head() {
  const signOut = () =>
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  return (
    <View style={styles.container}>
      <CustomText textType="SFProDisplayRegular" style={styles.title}>
        {title}
      </CustomText>
      <TouchableOpacity onPress={signOut}>
        <Group />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.EXIT_COLOR,
    marginRight: 6,
    lineHeight: 24,
    letterSpacing: -0.32,
  },
  container: {
    paddingTop: 10,
    paddingLeft: 9,
    paddingRight: 9,
    flexDirection: 'row',
    marginRight: 4,
    marginTop: 34,
    alignSelf: 'flex-end',
  },
});
