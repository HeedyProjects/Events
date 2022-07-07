import React, {useEffect} from 'react';
import database from '@react-native-firebase/database';

import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import InputComponent from '../../components/InputComponent';
import CustomText from '../../components/CustomText';
import BellIcon from '../../../assets/SVG/BellIcon.svg';
import SearchIcon from '../../../assets/SVG/searchIcon.svg';
import Eventcomponent from './components/EventComponent';
import {EVENT_DATA} from './components/EventComponent';
import {useNavigation} from '@react-navigation/native';

export default function Events() {
  const navigation = useNavigation();
  const eventsData = async () => {
    const databaseRef = database().ref('/Events');
    const data = await databaseRef.once('value');
    const eventsList = data.val();
    // console.log('IIIIIIIII', eventsList);
    const events2 = Object.values(eventsList);
    // console.log('EVENTS2', events2);
    const keys = Object.keys(eventsList);
    const events3 = keys.map(key => {
      return {...eventsList[key], id: key};
    });

    // console.log('keys', keys)
    // console.log('EVENTS3', events3)
  };
  useEffect(() => {
    eventsData();
  }, []);

  useEffect(
    () =>
      async function userData() {
        const dataBaseRef = await database().ref('/Users');
        const data = await dataBaseRef.once('value');
        const userList = data.val();
        console.log('WWWWWWWWW', userList);
      },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bellIconWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('NewEvents')}>
          <BellIcon />
        </TouchableOpacity>
      </View>
      <CustomText style={styles.text} textType="SFProDisplayBold">
        События
      </CustomText>

      <InputComponent
        backgroundColor={'#f5f5f5'}
        placeholder={'Поиск'}
        placeholderTextColor={'#A3A3A0'}
        marginBottom={24} borderWidth={1}>
        <View style={styles.svgWrapper}>
          <SearchIcon />
        </View>
      </InputComponent>

      <FlatList
        nestedScrollEnabled={true}
        data={EVENT_DATA}
        renderItem={Eventcomponent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.newEventButton}
        onPress={() => navigation.navigate('AddNewEventScreen')}>
        <CustomText style={styles.buttonText} textType="SFProTextbold">
          + Новое событие
        </CustomText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  newEventButton: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 95,
    paddingRight: 95,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 17,
    backgroundColor: '#5651D4',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  //=====================================
  svgWrapper: {
    position: 'absolute',
    left: 20,
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 16,
  },
  text: {
    fontSize: 34,
    marginLeft: 16,
    marginBottom: 18,
  },
  bellIconWrapper: {
    marginRight: 22,
    marginLeft: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
function ref(arg0: string) {
  throw new Error('Function not implemented.');
}
