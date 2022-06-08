import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Path from '../../../assets/SVG/Path.svg';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
const name = 'Мария Георгиева';
const bio = 'Фото и личные данные';

export default function Info() {
  return (
    <View style={styles.container}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          marginHorizontal: 11,
          marginTop: 20,
        }}>
        <Image
          style={styles.girl}
          source={require('../../../assets/profileIcons/girl.jpeg')}
        />
        <View style={{}}>
          <CustomText textType="SFProDisplayBlack" style={styles.name}>
            {name}
          </CustomText>
          <CustomText textType="SFProDisplayRegular" style={styles.bio}>
            {bio}
          </CustomText>
        </View>
        <TouchableOpacity>
          <Path style={styles.path} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  girl: {
    height: 70,
    width: 70,
    marginLeft: -30,
    margin: 10,
    marginTop: -55,
    borderRadius: 14,
  },

  name: {
    fontSize: 18,
    marginTop: -60,
    padding: 12,
    fontWeight: 'bold',
  },

  bio: {
    color: colors.MAIN_THEME_GRAY,
    padding: 19,
    marginTop: -24,
    marginLeft: -7,
    fontSize: 17,
  },

  path: {
    height: 20,
    width: 22,
    right: -20,
    top: -19,
  },
});
