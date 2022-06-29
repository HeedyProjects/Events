import React from 'react';
import {View, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
const title = 'Сделано в рамках курса';
const link = 'https://www.heedy.ru/';

export default function Link() {
  return (
    <View style={styles.group}>
      <CustomText textType="SFProDisplayRegular" style={styles.title}>
        {title}
      </CustomText>
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <CustomText textType="SFProDisplayRegular" style={styles.link}>
          Heedy Mobile
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 20,
    marginTop: 350,
    fontSize: 15,
    color: colors.MAIN_THEME_GRAY,
    marginLeft: 10,
  },

  link: {
    marginHorizontal: 20,
    marginTop: 350,
    fontSize: 15,
    color: colors.MAIN_THEME_PURPLE,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
