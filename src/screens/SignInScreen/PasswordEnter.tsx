import React from 'react';
import {StyleSheet, TextInput, SafeAreaView} from 'react-native';
import colors from '../../utils/colors';
import Password from '../../../assets/SVG/Password.svg';

export default function Password() {
  const [text, onChangeText] = React.useState('*******');

  return (
    <SafeAreaView style={styles.change}>
      <Password style={styles.pic} />
      <TextInput onChangeText={onChangeText} value={text} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  change: {
    borderColor: colors.FLAT_LIST_BORDER,
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
  },

  pic: {
    margin: 10,
  },
});
