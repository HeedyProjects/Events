import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import CustomText from '../../../components/CustomText';
import colors from '../../../utils/colors';
const Item = ({friend}) => (
  <View style={styles.listItem}>
    <Image source={friend.photo} style={styles.profileIcon} />
    <View style={styles.itemText}>
      <CustomText textType="SFProDisplayRegular" style={styles.friendNameText}>
        {friend.name}
      </CustomText>
      <CustomText
        textType="SFProDisplayRegular"
        style={
          styles.commonEventsText
        }>{`Общих мероприятий: ${friend.commonEvents}`}</CustomText>
    </View>
  </View>
);

export default Item;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.FLAT_LIST_BORDER,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
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
  profileIcon: {
    width: 64,
    height: 64,
    borderRadius: 4,
    marginRight: 16,
  },
});
