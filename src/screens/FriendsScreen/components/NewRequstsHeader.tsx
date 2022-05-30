import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import CustomText from '../../../components/CustomText';
import colors from '../../../utils/colors';
const requests = 'Новые заявки';
const showMore = 'Показать еще';
export default function NewRequestHeader() {
  return (
    <View style={styles.requestBox}>
      <CustomText textType="SFProDisplayBlack" style={styles.requests}>
        {requests}
      </CustomText>
      <TouchableOpacity>
        <CustomText textType="SFProTextRegular" style={styles.showMore}>
          {showMore}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  requests: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 32,
    letterSpacing: 0.35,
    color: colors.REQUESTS_TITLE,
  },
  requestBox: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showMore: {
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 24,
    letterSpacing: -0.08,
    color: colors.SEE_MORE,
    marginTop: 7,
  },
});
