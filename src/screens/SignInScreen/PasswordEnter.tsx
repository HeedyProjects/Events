import React from 'react';
import {StyleSheet, TextInput, SafeAreaView, View} from 'react-native';
import colors from '../../utils/colors';
import Password from '../../../assets/SVG/Password.svg';
import CustomText from '../../components/CustomText';

const title = 'Пароль';

export default function Pass({password, setPassword}) {
  return (
    <SafeAreaView>
      <CustomText textType="SFProDisplayRegular" style={styles.title}>
        {title}
      </CustomText>
      <View style={styles.change}>
        <Password style={styles.pic} />
        <TextInput
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="*******"
          secureTextEntry
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  change: {
    borderColor: colors.FLAT_LIST_BORDER,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 15,
    flexDirection: 'row',
    marginBottom: 8,
  },
  title: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: -0.08,
    color: colors.SCREEN_TITLE,
    marginLeft: 16,
    marginBottom: 8,
  },
  pic: {
    margin: 10,
  },
});
