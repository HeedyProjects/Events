import React from 'react';
import {View, StyleSheet} from 'react-native';
import RequestDetails from './RequestDetails';
import Button from './Button';
import colors from '../../../utils/colors';

const titleLeft = 'Скрыть';
const titleRight = 'Принять';

export default function NewRequestItem() {
  return (
    <View style={styles.requestItem}>
      <RequestDetails />
      <View style={styles.buttonBox}>
        <Button accent={false} title={titleLeft} />
        <Button accent title={titleRight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  requestItem: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: colors.FLAT_LIST_BORDER,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
});
