import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import CustomText from '../../components/CustomText';
import AddIcon from '../../../assets/SVG/addIcon.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SearchIcon from '../../../assets/SVG/searchIcon.svg';

const inviteBoxText = 'Пригласить друга';
const title = 'Друзья';
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
];

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

export default function Events() {
  const renderItem = ({item}) => <Item friend={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View>
          <View style={styles.inviteBox}>
            <CustomText textType="SFProTextRegular" style={styles.inviteText}>
              {inviteBoxText}
            </CustomText>
            <AddIcon />
          </View>
          <View>
            <CustomText textType="SFProDisplayBlack" style={styles.title}>
              {title}
            </CustomText>
          </View>

          <View>
            <SearchIcon style={styles.searchIcon} />
            <TextInput style={styles.searchLine} placeholder="Поиск" />
          </View>

          <View>
            <FlatList data={DATA} renderItem={renderItem} />
          </View>
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
    backgroundColor: 'white',
    flex: 1,
  },
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
    color: '#5651D4',
  },
  title: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.37,
    color: '#000000',
  },
  searchLine: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 24,
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
  listItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E1E1E1',
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
    color: '#000000',
  },
  commonEventsText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#A3A3A3',
  },
  profileIcon: {
    width: 64,
    height: 64,
    borderRadius: 4,
    marginRight: 16,
  },
});
