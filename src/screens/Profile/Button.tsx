import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button() {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <Text style={styles.enter}>Изменить пароль</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    margin: 19,
    backgroundColor: '#5651D4',
    marginTop: 200,
    width: 300,
    height: 48,
    borderRadius: 8,
  },

  enter: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
