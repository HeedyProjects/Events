import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IconLeft from '../../../../assets/SVG/LeftAccessory.svg';

export default function Head() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <IconLeft style={styles.image} />
      <Text style={styles.notifications}>Уведомления</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    marginLeft: 10,
    marginTop: 60,
  },

  notifications: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 150,
    marginTop: 60,
  },
});
