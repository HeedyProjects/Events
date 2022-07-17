import React, { useEffect, useState } from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import Path from '../../../assets/SVG/Path.svg';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


const bio = 'Фото и личные данные';

export default function Info() {
  const [name, setName] = useState('')
  const navigation = useNavigation();
  async function userData() {
    const dataBaseRef = await database().ref(
      '/Users/' + auth().currentUser?.uid,
    );
    // const dataBaseRef = await database().ref('/Users').orderByChild;
    const data1 = await dataBaseRef.once('value');
    setName(data1.val().name);
  }
  useEffect(() => {
    userData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Image
          style={styles.girl}
          source={require('../../../assets/profileIcons/girl.jpeg')}
        />

        <View style={styles.profileName}>
          <CustomText textType="SFProDisplayBlack" style={styles.name}>
            {name}
          </CustomText>
          <CustomText textType="SFProDisplayRegular" style={styles.bio}>
            {bio}
          </CustomText>
        </View>
        <TouchableOpacity
          style={styles.path}
          onPress={() => navigation.navigate('Profile')}>
          <Path width={12} height={12} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  profileName: {
    marginBottom: 8,
    marginTop: 8,
  },
  girl: {
    height: 64,
    width: 64,
    borderRadius: 4,
    marginRight: 16,
  },

  name: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: -0.41,
    color: colors.SCREEN_TITLE,
  },

  bio: {
    color: colors.MAIN_THEME_GRAY,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
  },

  path: {
    position: 'absolute',
    alignSelf: 'center',
    right: 22,
  },
  page: {
    borderColor: 'lightgrey',
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 16,
    marginTop: 24,
    padding: 16,
    flexDirection: 'row',
  },
});
