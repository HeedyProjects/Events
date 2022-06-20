import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import colors from '../../utils/colors';
import CustomText from '../../components/CustomText';
import Pic from './Image';
import Mail from './Emailenter';
import Pass from './PasswordEnter';
import Reg from './Registrate';
import But from './Button';
import auth from '@react-native-firebase/auth';
const forgot = 'Забыли пароль?';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () =>
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Pic />
        </View>
        <Mail email={email} setEmail={setEmail} />
        <Pass password={password} setPassword={setPassword} />
        <TouchableOpacity style={styles.forgotField}>
          <CustomText textType="SFProDisplayRegular" style={styles.forgot}>
            {forgot}
          </CustomText>
        </TouchableOpacity>
        <But signIn={signIn} />
        <Reg />
      </ScrollView>
    </SafeAreaView>
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
  forgotField: {
    alignItems: 'flex-end',
    marginRight: 15,
  },
  forgot: {
    color: colors.SEE_MORE,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 24,
    letterSpacing: -0.08,
  },
});
