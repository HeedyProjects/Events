import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../utils/colors';
const title = 'Сделано в рамках курса';
const link = 'Heedy.Mobile';

export default function Link() {
  return (
    <View style={styles.group}>
      <CustomText textType="SFProDisplayRegular" style={styles.title}>
        {title}
      </CustomText>
      <TouchableOpacity>
        <CustomText textType="SFProDisplayRegular" style={styles.link}>
          {link}
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
