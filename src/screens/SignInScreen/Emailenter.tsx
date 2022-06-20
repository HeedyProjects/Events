import React from 'react';
import {StyleSheet, TextInput, SafeAreaView, View} from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
import Email from '../../../assets/SVG/email.svg';
const title = 'Эл. почта';

export default function Mail({email, setEmail}) {
  return (
    <SafeAreaView>
      <CustomText textType="SFProDisplayRegular" style={styles.title}>
        {title}
      </CustomText>
      <View style={styles.change}>
        <Email style={styles.pic} />
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="example@sample.com"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: -0.08,
    color: colors.SCREEN_TITLE,
    marginLeft: 16,
    marginBottom: 8,
  },

  change: {
    borderColor: colors.FLAT_LIST_BORDER,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 15,
    flexDirection: 'row',
    marginBottom: 24,
  },

  pic: {
    margin: 10,
  },
});
