import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import SearchIcon from '../../../../assets/SVG/searchIcon.svg';
import colors from '../../../utils/colors';
export default function SearchLine() {
  return (
    <View>
      <SearchIcon style={styles.searchIcon} />
      <TextInput style={styles.searchLine} placeholder="Поиск" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchLine: {
    backgroundColor: colors.SEARCH_LINE_BACKGROUND,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 40,
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 23.99,
    left: 7.99,
    bottom: 7.99,
  },
});
