import React, {useState} from 'react';
// import database from '@react-native-firebase/database';
import Backicon from '../../../assets/SVG/Backicon.svg';
import Event from '../../../assets/SVG/Event.svg';
import CalendarIcon from '../../../assets/SVG/CalendarIcon.svg';
import ArrowDown from '../../../assets/SVG/ArrowDown.svg';
import GeoIcon from '../../../assets/SVG/GeoIcon.svg';
import FriendsIcon from '../../../assets/SVG/FriendsIcon.svg';
import ClockIcon from '../../../assets/SVG/ClockIcon.svg';
import GeoArrowIcon from '../../../assets/SVG/GeoArrowIcon.svg';
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Switch,
  TouchableOpacity,
} from 'react-native';
import InputComponent from '../../components/InputComponent';
import CustomText from '../../components/CustomText';
// import BellIcon from '../../../assets/SVG/BellIcon.svg';
// import SearchIcon from '../../../assets/SVG/searchIcon.svg';
// import Eventcomponent from '../EventsScreen/components/EventComponent';
// import {EVENT_DATA} from '../EventsScreen/components/EventComponent';

const addEventData = [
  {
    id: 1,
    title: 'Название мероприятия',
    placeHolder: 'Event',
    icon: <Event />,
    rightIcon: null,
    onChangeText: () => {
      console.log('ONPRESS_1');
    },
  },
  {
    id: 2,
    title: 'Дата проведения',
    placeHolder: 'ДД.ММ.ГГГГ',
    icon: <CalendarIcon />,
    rightIcon: <ArrowDown />,
    onChangeText: () => {
      console.log('ONPRESS_2');
    },
  },
  {
    id: 3,
    title: 'Время проведения',
    placeHolder: 'ЧЧ:ММ',
    icon: <ClockIcon />,
    rightIcon: <ArrowDown />,
    onChangeText: () => {
      console.log('ONPRESS_3');
    },
  },
  {
    id: 4,
    title: 'Место проведения',
    placeHolder: 'г. Москва',
    icon: <GeoIcon />,
    rightIcon: <GeoArrowIcon />,
    onChangeText: () => {
      console.log('ONPRESS_4');
    },
  },
  {
    id: 5,
    title: 'Друзья',
    placeHolder: 'Кто пойдет с вами?',
    icon: <FriendsIcon />,
    rightIcon: <ArrowDown />,
    onChangeText: () => {
      console.log('ONPRESS_5');
    },
  },
];

const RenderItem = ({item}: {item: any}) => (
  <View style={styles.blockWrapper}>
    <CustomText style={styles.inputTitle} textType="SFProTextRegular">
      {item.title}
    </CustomText>
    <InputComponent
      borderWidth={1}
      backgroundColor={'#fff'}
      placeholder={item.placeHolder}
      placeholderTextColor={'#A3A3A0'}
      marginBottom={24}>
      <View style={styles.svgWrapper}>{item.icon}</View>
      <View style={styles.arrowWrapper}>{item.rightIcon}</View>
    </InputComponent>
  </View>
);

export default function AddNewEventScreen({navigation}: {navigation: any}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
      <View style={styles.flatlistWrapper}>
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          data={addEventData}
          renderItem={RenderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.switchWrapper}>
        <CustomText style={styles.switchText} textType="SFProTextRegular">
          Включить уведомления
        </CustomText>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
          // ios_backgroundColor="#E1E1E1"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
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
  switchText: {
    fontSize: 16,
    alignSelf: 'center',
  },
  switchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 90,
  },
  flatlistWrapper: {
    height: 520,
  },
  blockWrapper: {
    marginBottom: 20,
  },
  arrowWrapper: {
    position: 'absolute',
    right: 35,
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
// function ref(arg0: string) {
//   throw new Error('Function not implemented.');
// }
