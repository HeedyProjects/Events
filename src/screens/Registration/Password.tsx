import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import Password from '../../../assets/SVG/Password.svg';
import Eye from '../../../assets/SVG/Eye.svg';

export default function Name({setPassword, password}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>Пароль</Text>
      <View style={styles.change}>
        <Password style={styles.pic} />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="**********"
          secureTextEntry
        />
        <Eye style={styles.eye} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    marginBottom: 8,
    letterSpacing: -0.08,
    color: '#333333',
  },
  container: {
    marginBottom: 24,
  },
  change: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
  },

  pic: {
    margin: 10,
  },
  eye: {
    position: 'absolute',
    right: 13.99,
    top: 11.99,
  },
});
