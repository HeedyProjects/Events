import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import Dates from '../../../assets/SVG/Dates.svg';
interface IProps {
  setBirthDate: (birthDate: string) => void;
  birthDate: string;
}

export default function Birth({setBirthDate, birthDate}: IProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.birth}>Дата рождения</Text>
      <View style={styles.change}>
        <Dates style={styles.pic} />

        <TextInput
          onChangeText={setBirthDate}
          value={birthDate}
          placeholder="ДД/ММ/ГГ"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  birth: {
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
