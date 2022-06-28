import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import Names from '../../../assets/SVG/Person.svg';

export default function Name() {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <Text style={styles.name}>Имя Фамилия</Text>
      <View style={styles.change}>
        <Names style={styles.pic} />
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="Иван Иванов"
        />
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
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    flexDirection: 'row',
  },

  pic: {
    margin: 10,
  },
});
