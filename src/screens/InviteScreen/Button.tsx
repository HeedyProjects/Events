import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button() {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <Text style={styles.enter}>Отправить приглашение</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    margin: 19,
    backgroundColor: '#5651D4',
    borderRadius: 10,
    height: 52,
    marginTop: 370,
  },

  enter: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
