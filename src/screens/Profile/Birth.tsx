import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import Date from '../../../assets/SVG/Date.svg';

export default function Birth() {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <Text style={styles.birth}>Дата рождения</Text>
      <View style={styles.change}>
        <Date style={styles.pic} />
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="ДД/ММ/ГГ"
        />
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
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    flexDirection: 'row',
  },

  pic: {
    margin: 10,
  },
});
