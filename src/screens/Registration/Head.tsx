import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Path from '../../../assets/SVG/Path.svg';

export default function Head() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity>
        <Path style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.reg}>Регистрация</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    marginLeft: 10,
    margin: 10,
  },

  reg: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 100,
    margin: 10,
  },
});
