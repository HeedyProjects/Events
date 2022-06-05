import React from 'react';
import {StyleSheet, TextInput, SafeAreaView, View} from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
import Email from '../../../assets/SVG/email.svg';
const title = 'Эл.почта';

export default function Mail() {
  const [text, onChangeText] = React.useState('example@sample.com');

  return (
    <SafeAreaView>
      <CustomText textType="SFProDisplayBlack" style={styles.title}>
        {title}
      </CustomText>
      <View style={styles.change}>
        <Email style={styles.pic} />
        <TextInput onChangeText={onChangeText} value={text} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 18,
    marginBottom: 2,
  },

  change: {
    borderColor: colors.FLAT_LIST_BORDER,
    borderWidth: 2,
    borderRadius: 4,
    margin: 10,
    flexDirection: 'row',
  },

  pic: {
    margin: 10,
  },
});
