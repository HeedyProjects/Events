import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

type MyButton = {
  text: string;
};

export default function Button1({text, accent, onPress}: MyButton) {
  return (
    <View style={accent ? styles.go : styles.dontGo}>
      <TouchableOpacity onPress={onPress}>
        <Text style={accent ? styles.text1 : styles.text2}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#A3A3A3',
    lineHeight: 20,
  },

  text2: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    lineHeight: 20,
  },

  go: {
    fontFamily: 'Poppins',
    borderColor: 'darkgrey',
    borderWidth: 1.5,
    borderRadius: 10,
    flex: 1,
    height: 52,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dontGo: {
    backgroundColor: '#5651D4',
    borderRadius: 10,
    flex: 1,
    height: 52,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
