import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import InviteFriend from './components/InviteFriend';
import Header from './components/Header';
import NewRequestHeader from './components/NewRequstsHeader';
import NewRequestItem from './components/NewRequestItem';
import Item from './components/FlatListItem';
import {useSelector} from 'react-redux';
import colors from '../../utils/colors';
import InputComponent from '../../components/InputComponent';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {RootState} from '../../store/index';
interface friendType {
  item: {
    photo: ImageSourcePropType;
    name: string;
    commonEvents: number;
  };
}

export default function Friends({navigation}: {navigation: any}) {
  const renderItem = ({item}: friendType) => <Item friend={item} />;
  const data = useSelector((state: RootState) => state.friends.friends);
  async function userData() {
    const dataBaseRef = await database().ref(
      '/Users/' + auth().currentUser?.uid + '/friends/',
    );
    // const dataBaseRef = await database().ref('/Users').orderByChild;
    const data1 = await dataBaseRef.once('value');
    const userList = data1.val();
    return console.log('WWWWWWWWWW', userList);
  }

  useEffect(() => {
    userData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddings}>
        <TouchableOpacity onPress={() => navigation.navigate('InviteScreen')}>
          <InviteFriend />
        </TouchableOpacity>
        <Header />

        <InputComponent
          backgroundColor={'#f5f5f5'}
          placeholder={'Поиск'}
          placeholderTextColor={'#A3A3A0'}
          marginBottom={24}
          borderWidth={0}
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
