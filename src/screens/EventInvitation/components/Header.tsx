import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Arrow from '../../../../assets/SVG/LeftAccessory.svg';

export default function Head() {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Arrow style={styles.image} />
      <Text style={styles.ev}>Событие</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    marginLeft: 10,
    margin: 10,
  },

  ev: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginRight: 130,
  },
});
