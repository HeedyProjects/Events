import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import InviteFriend from './components/InviteFriend';
import Header from './components/Header';
import NewRequestHeader from './components/NewRequstsHeader';
import NewRequestItem from './components/NewRequestItem';
import Item from './components/FlatListItem';
import {useSelector} from 'react-redux';
import colors from '../../utils/colors';
import InputComponent from '../../components/InputComponent';
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
        <InviteFriend />
        <Header />

        <InputComponent
          placeholder={'Поиск'}
          placeholderTextColor={'#A3A3A0'}
          marginBottom={24}
        />

        <NewRequestHeader />

        <NewRequestItem />
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={renderItem}
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.FRIENDS_SCREEN_BACKGROUND,
    flex: 1,
  },
  paddings: {
    paddingLeft: 16,
    paddingRight: 15,
    paddingTop: 26,
    backgroundColor: colors.FRIENDS_SCREEN_BACKGROUND,
  },
  list: {
    marginBottom: 390,
    marginLeft: 16,
    marginRight: 15,
  },
});
