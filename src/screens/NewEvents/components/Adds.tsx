import {View, StyleSheet} from 'react-native';
import CustomText from '../../../components/CustomText';
import colors from '../../../utils/colors';
import Flower from '../../../../assets/SVG/Flower.svg';
import OrangeBell from '../../../../assets/SVG/Orangebell.svg';
import React from 'react';
const RequestData = {
  name: 'Вечеринка "Мы',
  photo: require('../../../../assets/profileIcons/girl2.jpg'),
  time: '20:30',
};

export default function New() {
  return (
    <View style={styles.container}>
      <Flower style={styles.flower} />
      <View style={styles.itemText}>
        <CustomText textType="SFProTextRegular" style={styles.friendNameText}>
          {RequestData.name}
          <OrangeBell style={styles.bell} />
        </CustomText>
        <View>
          <CustomText
            textType="SFProTextRegular"
            style={styles.commonEventsText}>
            {`29.05.2022, ${RequestData.time}`}
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
  },
  bell: {
    marginTop: 18,
    paddingLeft: 16,
    paddingRight: 120,
    marginLeft: 60,
  },
  friendNameText: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: -0.41,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
