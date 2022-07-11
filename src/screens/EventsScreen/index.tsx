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
import Eventcomponent from './components/EventComponent';
import {EVENT_DATA} from './components/EventComponent';
import {useNavigation} from '@react-navigation/native';
import colors from '../../utils/colors';

export default function Events() {
  const navigation = useNavigation();
  useEffect(
    () =>
      async function eventsData() {
        const databaseRef = await database().ref('/Events');
        const data = await databaseRef.once('value');
        const eventsList = data.val();
        console.log('YYYYYYY', eventsList);
      },
    [],
  );

  useEffect(
    () =>
      async function userData() {
        const dataBaseRef = await database().ref('/Users');
        const data = await dataBaseRef.once('value');
        const userList = data.val();
        console.log('WWWWWWWWWW', userList);
      },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddings}>
      <View style={styles.bellIconWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('NewEvents')}>
          <BellIcon />
        </TouchableOpacity>
      </View>
      <CustomText style={styles.text} textType="SFProDisplayBlack">
        События
      </CustomText>

      <InputComponent
        backgroundColor={'#f5f5f5'}
        placeholder={'Поиск'}
        placeholderTextColor={'#A3A3A0'}
        marginBottom={24}
        borderWidth={0}
      />

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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddings:{
    paddingLeft: 16,
    paddingRight: 15,
  },
  newEventButton: {
    padding: 12,
    backgroundColor: '#5651D4',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 17,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  //=====================================
  svgWrapper: {
    position: 'absolute',
    left: 28,
    top: 8,
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  text: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.37,
    color: colors.SCREEN_TITLE,
    marginBottom: 16,
  },
  bellIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25.99,
  },
});
function ref(arg0: string) {
  throw new Error('Function not implemented.');
}
