import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../utils/colors';
import CustomText from '../../components/CustomText';
import Pic from './Image';
import Mail from './Emailenter';
import Pass from './PasswordEnter';
import Reg from './Registrate';
import But from './Button';
const forgot = 'Забыли пароль?';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View>
        <Pic />
      </View>
      <Mail />
      <Pass />
      <TouchableOpacity>
        <CustomText textType="SFProDisplayBlack" style={styles.forgot}>
          {forgot}
        </CustomText>
      </TouchableOpacity>
      <But />
      <Reg />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ACCENT_BUTTON_TEXT,
  },

  mail: {
    margin: 10,
    fontSize: 18,
    marginBottom: 2,
  },

  forgot: {
    color: colors.SEE_MORE,
    margin: 10,
    marginLeft: 200,
  },
});
