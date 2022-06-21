import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
    borderColor: '#E1E1E1',
    backgroundColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 24,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },

  text: {
    margin: 10,
    color: '#A3A3A3',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: -0.41,
  },

  pic: {},
});
