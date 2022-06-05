import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../utils/colors';
import CustomText from '../../components/CustomText';
const text1 = 'Еще нет аккаунта?';
const text2 = 'Зарегистрироваться';

export default function Registrate() {
  return (
    <View style={styles.reg}>
      <CustomText textType="SFProDisplayBlack" style={styles.text1}>
        {text1}
      </CustomText>
      <TouchableOpacity>
        <CustomText textType="SFProDisplayBlack" style={styles.text2}>
          {text2}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  reg: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -80,
    marginTop: 90,
  },

  text1: {
    margin: 5,
  },

  text2: {
    color: colors.MAIN_THEME_PURPLE,
    margin: 5,
  },
});
