import React from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../EventInvitation/components/Header';
import Item from '../FriendsScreen/components/FlatListItem';
import FlatList from './components/FlatList';
import Event from '../EventInvitation/components/Event';
import {RootState} from '../../store/index';
export default function EventInvitation({navigation}: {navigation: any}) {
  interface friendType {
    item: {
      photo: ImageSourcePropType;
      name: string;
      commonEvents: number;
    };
  }

  const renderItem = ({item}: friendType) => <Item friend={item} />;
  const data = useSelector((state: RootState) => state.friends.friends);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Header />
      </TouchableOpacity>
      <Event />
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
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 15,
  },
  list: {
    marginBottom: 390,
    marginLeft: 16,
    marginRight: 15,
  },
});
