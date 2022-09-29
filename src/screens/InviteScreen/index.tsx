import React, { useEffect, useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Email from '../InviteScreen/Email';
import Head from '../InviteScreen/Head';
import Write from '../InviteScreen/Write';
import Button from '../InviteScreen/Button';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


export default function InviteScreen({navigation}) {
  const [email, setEmail] = useState('')
  const [data, setData] = useState();
  async function userData() {
        const dataBaseRef = await database().ref(
        '/Users/'
        );
        const data1 = await dataBaseRef.once('value');
        const userList = data1.val();
        setData(userList)
  }
  const addFriend = (data:any) => {
    for (let key in data)
    {
      if (data[key].email !== auth().currentUser?.email
      && data[key].email === email)
        {
          const currentUser = auth().currentUser;
          console.log('Hooray, i almost did it');
          console.log(data[key]);
          database()
          .ref('/Users/' + currentUser?.uid + '/friends/' + key)
          .set({
            name: data[key].name,
            email: data[key].email
          })
          .then(() => console.log('Data set.'));
          database()
          .ref('/Users/' + key + '/friends/' + currentUser?.uid)
          .set({
            name: data[currentUser?.uid].name,
            email: currentUser?.email
          })
          .then(() => console.log('Data set.'));
        }
    }
  }

  useEffect(() => {
    userData();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Head />
      </TouchableOpacity>

      <Email email={email} setEmail={setEmail}/>
      <Write />
      <Button addFriend={addFriend} data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
