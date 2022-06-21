import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import Emails from '../../../assets/SVG/Emails.svg';

export default function Email() {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.email}>Эл. почта</Text>
      <View style={styles.change}>
        <Emails style={styles.pic} />
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="example@sample.com"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  email: {
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
