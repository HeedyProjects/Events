import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import User from '../../../assets/SVG/User.svg';

export default function Name({name, setName}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>Имя Фамилия</Text>
      <View style={styles.change}>
        <User style={styles.pic} />
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Иван Иванов"
        />
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
    marginTop: 13,
  },
});
