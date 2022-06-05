import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import InviteFriend from './components/InviteFriend';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from './components/Header';
import SearchLine from './components/SearchLine';
import NewRequestHeader from './components/NewRequstsHeader';
import NewRequestItem from './components/NewRequestItem';
import Item from './components/FlatListItem';
import {useSelector} from 'react-redux';
import colors from '../../utils/colors';

interface friendType {
  item: {
    photo: ImageSourcePropType;
    name: string;
    commonEvents: number;
  };
}

export default function Events() {
  const renderItem = ({item}: friendType) => <Item friend={item} />;
  const data = useSelector(state => state.friends.friends);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddings}>
        <KeyboardAwareScrollView>
          <InviteFriend />
          <Header />

          <SearchLine />

          <NewRequestHeader />

          <NewRequestItem />

          <FlatList
            data={data}
            renderItem={renderItem}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.FRIENDS_SCREEN_BACKGROUND,
    // flex: 1,
  },
  paddings: {
    paddingLeft: 16,
    paddingRight: 15,
    paddingTop: 26,
    backgroundColor: colors.FRIENDS_SCREEN_BACKGROUND,
    // flex: 1,
  },
});
