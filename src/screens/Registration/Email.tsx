import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import Emails from '../../../assets/SVG/Emails.svg';

export default function Email() {
  const [text, onChangeText] = React.useState('example@com');

  return (
    <SafeAreaView>
      <Text style={styles.email}> Эл. почта</Text>
      <View style={styles.change}>
        <Emails style={styles.pic} />
        <TextInput onChangeText={onChangeText} value={text} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  email: {
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