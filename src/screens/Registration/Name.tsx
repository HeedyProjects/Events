import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import User from '../../../assets/SVG/User.svg';

export default function Name() {
  const [text, onChangeText] = React.useState('Иван Иванов');

  return (
    <SafeAreaView>
      <Text style={styles.name}>Имя Фамилия</Text>
      <View style={styles.change}>
        <User style={styles.pic} />
        <TextInput onChangeText={onChangeText} value={text} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  name: {
    margin: 10,
    fontSize: 18,
    marginBottom: 2,
  },

  change: {
    borderColor: 'lightgrey',
    borderWidth: 2,
    borderRadius: 4,
    margin: 10,
    flexDirection: 'row',
  },

  pic: {
    margin: 10,
  },
});
