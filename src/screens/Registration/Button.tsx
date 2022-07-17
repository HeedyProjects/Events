import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
const title = 'Продолжить';

export default function Button({regAndSignIn}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        regAndSignIn();
      }}>
      <CustomText textType="SFProDisplayBlack" style={styles.title}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',

    borderRadius: 16,
    height: 52,
    marginTop: 8,
    marginBottom: 44,
    backgroundColor: colors.MAIN_THEME_PURPLE,
  },

  title: {
    color: colors.ACCENT_BUTTON_TEXT,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
