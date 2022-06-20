import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Group from '../../../assets/SVG/Group.svg';
import CustomText from '../../components/CustomText';
import auth from '@react-native-firebase/auth';
const title = 'Выйти';

export default function Head() {
  const signOut = () =>
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        margin: 30,
        marginTop: 50,
        alignSelf: 'flex-end',
      }}>
      <CustomText textType="SFProDisplayBlack" style={styles.title}>
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
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red',
    marginRight: 6,
  },
});
