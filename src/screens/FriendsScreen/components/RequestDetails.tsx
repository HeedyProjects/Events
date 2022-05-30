import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import CustomText from '../../../components/CustomText';
import colors from '../../../utils/colors';
const RequestData = {
  name: 'Ольга Тихонова',
  photo: require('../../../../assets/profileIcons/minerva.jpg'),
  commonFriends: 3,
};

export default function RequestDetails() {
  return (
    <View style={styles.container}>
      <Image source={RequestData.photo} style={styles.profileIcon} />
      <View style={styles.itemText}>
        <CustomText textType="SFProTextRegular" style={styles.friendNameText}>
          {RequestData.name}
        </CustomText>
        <CustomText textType="SFProTextRegular" style={styles.commonEventsText}>
          {`Общих друзей: ${RequestData.commonFriends}`}
        </CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  profileIcon: {
    width: 64,
    height: 64,
    borderRadius: 4,
    marginRight: 16,
  },
  itemText: {
    marginTop: 8,
    marginBottom: 8,
  },
  friendNameText: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: -0.41,
    color: colors.FRIEND_NAME_TEXT,
  },
  commonEventsText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: colors.MAIN_THEME_GRAY,
  },
});
