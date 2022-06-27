import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BackIcon from '../../../../assets/SVG/Backicon.svg';

export default function Head() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <BackIcon style={styles.back} />
      <Text style={styles.notifications}>Уведомления</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  notifications: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 140,
    marginTop: 90,
  },
  back: {
    margin: 10,
    marginTop: 90,
    marginLeft: 10,
  },
});
