import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomText from '../../../components/CustomText';
import colors from '../../../utils/colors';
const title = 'Друзья';
export default function Header() {
  return (
    <View>
      <CustomText textType="SFProDisplayBlack" style={styles.title}>
        {title}
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.37,
    color: colors.SCREEN_TITLE,
  },
});
