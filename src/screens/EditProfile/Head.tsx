import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BackIcon from '../../../assets/SVG/Backicon.svg';

export default function Head() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity>
        <BackIcon style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.pr}>Профиль</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    margin: 10,
  },

  pr: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 120,
    margin: 10,
  },
});
