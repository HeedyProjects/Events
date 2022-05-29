import React from 'react';
import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InviteFriend from './components/InviteFriend';
import Header from './components/Header';
import SearchLine from './components/SearchLine';
import NewRequestHeader from './components/NewRequstsHeader';
import NewRequestItem from './components/NewRequestItem';
import Item from './components/FlatListItem';
import colors from '../../utils/colors';
const DATA = [
  {
    photo: require('../../../assets/profileIcons/minerva.jpg'),
    name: 'Анна Ерёмина',
    commonEvents: 1,
  },
  {
    photo: require('../../../assets/profileIcons/minerva.jpg'),
    name: 'Елена Давыдова',
    commonEvents: 2,
  },
  {
    photo: require('../../../assets/profileIcons/minerva.jpg'),
    name: 'Анна Ерёмина',
    commonEvents: 1,
  },
  {
    photo: require('../../../assets/profileIcons/minerva.jpg'),
    name: 'Елена Давыдова',
    commonEvents: 2,
  },
];

export default function Events() {
  const renderItem = ({item}) => <Item friend={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View>
          <InviteFriend />
          <Header />
          <SearchLine />

          <NewRequestHeader />
          <NewRequestItem />

          <FlatList data={DATA} renderItem={renderItem} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 15,
    paddingTop: 26,
    backgroundColor: colors.FRIENDS_SCREEN_BACKGROUND,
    flex: 1,
  },
});
