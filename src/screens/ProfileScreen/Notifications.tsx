import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Toggle from '../../../assets/SVG/Toggle.svg';
import Photo from '../../components/ImagePicker';

export default function Notifications() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.nots}>Уведомления</Text>
      <Toggle style={styles.image} />
      <Photo />
    </View>
  );
}

const styles = StyleSheet.create({
  nots: {
    fontWeight: 'bold',
    fontSize: 19,
    margin: 10,
    marginTop: 40,
    marginLeft: 15,
  },

  image: {
    margin: 10,
    marginTop: 30,
  },
});
