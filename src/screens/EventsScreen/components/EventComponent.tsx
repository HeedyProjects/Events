import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../../../components/CustomText';
import Event from '../../../../assets/SVG/Event.svg';
import GreyBell from '../../../../assets/SVG/GreyBell.svg';
import RingingBell from '../../../../assets/SVG/RingingBell.svg';

export const EVENT_DATA = [
  {
    id: 1,
    title: 'Выставка «Тайны глубин»',
    time: '10.05.2022',
    date: '15:00',
    status: false,
  },
  {
    id: 2,
    title: 'Спектакль «Чайка»',
    time: '16.05.2022',
    date: '19:00',
    status: true,
  },
  {
    id: 3,
    title: 'Концерт «Газеты пишут»',
    time: '20.05.2022',
    date: '22:00',
    status: true,
  },
  {
    id: 4,
    title: 'Вечеринка «Назад в 90-е»',
    time: '25.05.2022',
    date: '21:00',
    status: false,
  },
  {
    id: 4,
    title: 'Вечеринка «Назад в 90-е»',
    time: '25.05.2022',
    date: '21:00',
    status: false,
  },
];
export default function EventComponent({item}: any) {
  return (
    <View style={styles.eventItemWrapper}>
      <View style={styles.upperwrapper}>
        <View style={styles.leftWrapper}>
          <Event />

          <CustomText style={styles.iventText} textType="SFProTextRegular">
            {item.title}
          </CustomText>
        </View>

        {item.status ? <RingingBell /> : <GreyBell />}
      </View>
      <View style={styles.dateWrapper}>
        <CustomText textType="SFProTextRegular" style={styles.date}>
          {item.date}
        </CustomText>
        <CustomText textType="SFProTextRegular" style={styles.date}>
          {item.time}
        </CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 15,
    color: '#A3A3A3',
  },
  dateWrapper: {
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 130,
  },
  leftWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  iventText: {
    color: '#000',
    fontSize: 17,
    marginLeft: 8,
    alignSelf: 'center',
  },
  upperwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  eventItemWrapper: {
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 18,
    marginBottom: 16,
  },
});
