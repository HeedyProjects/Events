import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import Head from './Head';
import AddPhoto from './AddPhoto';
import Name from './Name';
import Birth from './Birth';
import Email from './Email';
import Password from './Password';
import PasswordAgain from './PasswordAgain';
import Button from './Button';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [flag, setFlag] = useState(true);
  const [flagAgain, setFlagAgain] = useState(true);

  const createNode = (uid: string | undefined) => {
    database()
      .ref('/Users/' + uid)
      .set({
        name: name,
        email: email
      })
      .then(() => console.log('Data set.'));
  };

  const regAndSignIn = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        const currentUser = auth().currentUser;
        createNode(currentUser?.uid);
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.paddings}>
        <View>
          <Head />
          <AddPhoto />
        </View>
        <Name name={name} setName={setName} />
        <Birth setBirthDate={setBirthDate} birthDate={birthDate} />

        <Email setEmail={setEmail} email={email} />

        <Password
          setPassword={setPassword}
          password={password}
          setFlag={setFlag}
          flag={flag}
        />
        <PasswordAgain
          setPasswordAgain={setPasswordAgain}
          passwordAgain={passwordAgain}
          setFlagAgain={setFlagAgain}
          flagAgain={flagAgain}
        />

        <Button regAndSignIn={regAndSignIn} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  paddings: {
    paddingLeft: 16,
    paddingRight: 15,
  }
});
