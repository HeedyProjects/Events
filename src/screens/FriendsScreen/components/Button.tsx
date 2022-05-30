import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import CustomText from '../../../components/CustomText';
import colors from '../../../utils/colors';
export default function Button({accent, title}) {
  return (
    <TouchableOpacity style={accent ? styles.accentButton : styles.button}>
      <CustomText
        textType="SFProTextRegular"
        style={accent ? styles.accentTitle : styles.title}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: colors.MAIN_THEME_GRAY,
  },
  accentTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: colors.ACCENT_BUTTON_TEXT,
  },
  button: {
    borderWidth: 1,
    paddingBottom: 12,
    paddingTop: 12,
    borderRadius: 4,
    width: '48%',
    alignItems: 'center',
    borderColor: colors.MAIN_THEME_GRAY,
  },
  accentButton: {
    borderWidth: 1,
    paddingBottom: 12,
    paddingTop: 12,
    borderRadius: 4,
    width: '48%',
    alignItems: 'center',
    borderColor: colors.MAIN_THEME_GRAY,
    backgroundColor: colors.MAIN_THEME_PURPLE,
  },
});
