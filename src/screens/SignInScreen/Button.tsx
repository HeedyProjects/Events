import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
const title = 'Войти';

export default function Button() {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <CustomText textType="SFProDisplayBlack" style={styles.title}>
          {title}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    margin: 19,
    borderRadius: 16,
    height: 52,
    marginTop: 50,
    backgroundColor: colors.FRIENDS_SCREEN_BACKGROUND,
  },

  title: {
    color: colors.ACCENT_BUTTON_TEXT,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
