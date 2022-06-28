import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import Emails from '../../../assets/SVG/Emails.svg';
import Eye from '../../../assets/SVG/Eye.svg';

export default function Password() {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <Text style={styles.pass}> Пароль</Text>
      <View style={styles.change}>
        <Emails style={styles.pic} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="example@com"
        />
        <Eye style={styles.eye} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pass: {
    margin: 10,
    fontSize: 18,
    marginBottom: 2,
    flexDirection: 'row',
    marginHorizontal: 10,
  },

  change: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pic: {
    margin: 10,
    marginTop: 6,
  },

  eye: {
    marginTop: 6,
    marginHorizontal: 70,
    marginRight: 10,
  },
  input: {
    marginLeft: -120,
  },
});
