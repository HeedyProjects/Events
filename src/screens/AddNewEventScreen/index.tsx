import React, {useEffect} from 'react';
// import database from '@react-native-firebase/database';
import Backicon from '../../../assets/SVG/Backicon.svg';
import Event from '../../../assets/SVG/Event.svg';
import CalendarIcon from '../../../assets/SVG/CalendarIcon.svg';
import ArrowDown from '../../../assets/SVG/ArrowDown.svg';
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
// import Eventcomponent from '../EventsScreen/components/EventComponent';
// import {EVENT_DATA} from '../EventsScreen/components/EventComponent';

export default function AddNewEventScreen({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.eventsHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Backicon />
        </TouchableOpacity>

        <CustomText style={styles.text} textType="SFProDisplayBold">
          Добавить новое событие
        </CustomText>
      </View>
      <View style={styles.blockWrapper}>
        <CustomText style={styles.inputTitle} textType="SFProText-regular">
          Название мероприятия
        </CustomText>
        <InputComponent
          borderWidth={1}
          backgroundColor={'#fff'}
          placeholder={'Event'}
          placeholderTextColor={'#A3A3A0'}
          marginBottom={24}>
          <View style={styles.svgWrapper}>
            <Event />
            
          </View>
        </InputComponent>
      </View>
      <View style={styles.blockWrapper}>
        <CustomText style={styles.inputTitle} textType="SFProText-regular">
        Дата проведения
        </CustomText>
        <InputComponent
          borderWidth={1}
          backgroundColor={'#fff'}
          placeholder={'ДД.ММ.ГГГГ'}
          placeholderTextColor={'#A3A3A0'}
          marginBottom={24}>
          <View style={styles.svgWrapper}>
            <CalendarIcon />
          </View>
          <ArrowDown />
        </InputComponent>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blockWrapper: {
    marginBottom: 24,
  },
  eventsHeader: {
    marginLeft: 16,
    magrginTop: 55,
    flexDirection: 'row',
  },
  inputTitle: {
    fontSize: 13,
    marginLeft: 20,
    marginBottom: 6,
  },

  //=====================================
  svgWrapper: {
    position: 'absolute',
    left: 26,
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
    fontSize: 14,
    marginLeft: 16,
    marginBottom: 18,
  },
});
function ref(arg0: string) {
  throw new Error('Function not implemented.');
}
