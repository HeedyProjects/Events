import React from 'react';
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
console.log(EVENT_DATA);
export default function Events() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bellIconWrapper}>
        <BellIcon />
      </View>
      <CustomText style={styles.text} textType="SFProDisplayBold">
        События
      </CustomText>

      <InputComponent
        placeholder={'Поиск'}
        placeholderTextColor={'#A3A3A0'}
        marginBottom={24}>
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
      <TouchableOpacity style={styles.newEventButton}>
        <CustomText style={styles.buttonText} textType="SFProTextbold">+ Новое событие</CustomText>
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
