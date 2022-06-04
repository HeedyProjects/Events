import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import EventsTabIcon from '../../../../assets/SVG/eventsTabIcon.svg';
import Bell from '../../../../assets/SVG/Bell.svg';

export default function New() {
  return (
    <View style={styles.container}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        <EventsTabIcon />
        <Text style={styles.eves}>Вечеринка "Only Jazz"</Text>
        <Bell />
      </View>
      <Text style={styles.date}>28.05.2022, 20:30</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eves: {
    fontSize: 15,
    marginBottom: 20,
    padding: 12,
  },

  date: {
    marginHorizontal: 10,
    marginLeft: 20,
    color: 'grey',
    padding: 8,
    marginTop: -18,
  },
});
