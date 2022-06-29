import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import Message from '../../../assets/SVG/message.svg';

export default function Write() {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <Text style={styles.inv}>Текст приглашения</Text>
      <View style={styles.change}>
        <Message style={styles.pic} />
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="Введите текст приглашения"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inv: {
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
