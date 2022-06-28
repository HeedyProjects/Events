import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import CustomText from '../../../components/CustomText';
import AddIcon from '../../../../assets/SVG/addIcon.svg';
import colors from '../../../utils/colors';
const inviteBoxText = 'Пригласить друга';

export default function InviteFriend() {
  return (
    <TouchableOpacity style={styles.inviteBox}>
      <CustomText textType="SFProTextRegular" style={styles.inviteText}>
        {inviteBoxText}
      </CustomText>
      <TouchableOpacity>
        <AddIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inviteBox: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: -6,
  },
  inviteText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: colors.MAIN_THEME_PURPLE,
  },
});
