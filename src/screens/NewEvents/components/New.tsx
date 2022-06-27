import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomText from '../../../components/CustomText';
import colors from '../../../utils/colors';
import Flower from '../../../../assets/SVG/Flower.svg';
import Bell from '../../../../assets/SVG/Bell.svg';
const RequestData = {
  name: 'Вечеринка "Only Jazz',
  time: '20:30',
};

export default function New() {
  return (
    <View style={styles.container}>
      <Flower style={styles.flower} />
      <View style={styles.itemText}>
        <CustomText textType="SFProTextRegular" style={styles.friendNameText}>
          {RequestData.name}
          <Bell style={styles.bell} />
        </CustomText>
        <View>
          <CustomText
            textType="SFProTextRegular"
            style={styles.commonEventsText}>
            {`28.05.2022, ${RequestData.time}`}
          </CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginTop: 8,
    marginBottom: 8,
    justifycontent: 'space - between',
  },
  bell: {
    marginTop: 18,
    marginRight: 7,
    marginLeft: 60,
  },
  friendNameText: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: -0.41,
    margin: 10,
    color: colors.FRIEND_NAME_TEXT,
  },
  commonEventsText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: colors.MAIN_THEME_GRAY,
    margin: 10,
    marginTop: -5,
  },
  flower: {
    marginTop: 18,
    marginLeft: 12,
  },
});
