import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Add from '../../../assets/SVG/Add.svg';

export default function AddPhoto() {
  return (
    <View style={styles.photo}>
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{position: 'absolute', zIndex: 1, right: 80, top: -10}}>
        <Add style={styles.camera} />
      </TouchableOpacity>
      <Image
        source={require('../../../assets/profileIcons/girl.jpeg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    borderRadius: 8,
    width: 112,
    height: 112,
  },
  camera: {
    width: 40,
    height: 40,
  },
});
