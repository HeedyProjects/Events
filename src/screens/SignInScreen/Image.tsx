import React from 'react';
import {View, StyleSheet} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import image from '../../../assets//SVG/image.svg';

export default function Pic() {
  return (
    <View>
      <image style={styles.pic} />
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    justifyContent: 'center',
    marginLeft: 15,
    marginTop: 30,
  },
});
