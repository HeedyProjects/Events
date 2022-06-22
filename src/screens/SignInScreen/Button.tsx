import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
const title = 'Войти';

export default function Button({signIn}) {
  return (
    <TouchableOpacity style={styles.button} onPress={signIn}>
      <CustomText textType="SFProDisplayBlack" style={styles.title}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 15,
    borderRadius: 16,
    height: 52,
    marginTop: 40,
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
