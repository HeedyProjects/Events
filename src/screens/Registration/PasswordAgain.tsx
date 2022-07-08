import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Password from '../../../assets/SVG/Password.svg';
import Eye from '../../../assets/SVG/Eye.svg';
interface IProps {
  setPasswordAgain: (password: string) => void;
  setFlagAgain: (flag: boolean) => void;
  passwordAgain: string;
  flagAgain: boolean;
}

export default function PassAgain({
  setPasswordAgain,
  passwordAgain,
  setFlagAgain,
  flagAgain,
}: IProps) {
  const showPass = () => {
    setFlagAgain(!flagAgain);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.email}>Пароль повторно</Text>
      <View style={styles.change}>
        <Password style={styles.pic} />
        <TextInput
          onChangeText={setPasswordAgain}
          value={passwordAgain}
          placeholder="**********"
          secureTextEntry={flagAgain}
        />
        <TouchableOpacity style={styles.eye} onPress={() => showPass()}>
          <Eye />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  email: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    marginBottom: 8,
    letterSpacing: -0.08,
    color: '#333333',
  },
  container: {
    marginBottom: 24,
  },
  change: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
  },

  pic: {
    margin: 10,
  },
  eye: {
    position: 'absolute',
    right: 13.99,
    top: 11.99,
  },
});
