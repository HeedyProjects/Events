import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Camera from '../../../assets/SVG/Camera.svg';

export default function AddPhoto() {
  return (
    <View style={styles.photo}>
      <Camera style={styles.pic} />
      <Text style={styles.text}>Добавить фото</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    borderColor: ' #F5F5F5',
    backgroundColor: '#F5F5F5',
    borderWidth: 2,
    borderRadius: 4,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },

  text: {
    margin: 10,
    color: '#A3A3A3',
  },

  pic: {},
});
