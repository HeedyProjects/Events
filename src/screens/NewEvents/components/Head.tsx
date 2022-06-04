import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BackIcon from '../../../../assets/SVG/Backicon.svg';

type MyHead = {
  pressFunction: () => void;
};

export default function Head({pressFunction}: MyHead) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        onPress={() => {
          pressFunction();
        }}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.notifications}>Уведомления</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  notifications: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 100,
  },
});
