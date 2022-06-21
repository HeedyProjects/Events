import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import Dates from '../../../assets/SVG/Dates.svg';

export default function Birth() {
  const [text, onChangeText] = React.useState('ДД/ММ/ГГ');

  return (
    <SafeAreaView>
      <Text style={styles.birth}>Дата рождения</Text>
      <View style={styles.change}>
        <Dates style={styles.pic} />
        <TextInput onChangeText={onChangeText} value={text} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  birth: {
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
