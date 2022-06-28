import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ArrowBack from '../../../assets/SVG/Backicon.svg';

export default function Head() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <ArrowBack style={styles.image} />
      <Text style={styles.invite}>Пригласить друга</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    marginLeft: 10,
    margin: 10,
    marginTop: 70,
  },

  invite: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 100,
    margin: 10,
    marginTop: 70,
  },
});
