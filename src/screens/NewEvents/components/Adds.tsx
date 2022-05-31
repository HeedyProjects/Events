/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import EventsTabIcon from '../../../../assets/SVG/eventsTabIcon.svg';
import OrangeBell from '../../../../assets/SVG/Orangebell.svg';

export default function Adds() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        <EventsTabIcon />
        <Text style={styles.eves}>Вечеринка "Мы"</Text>
        <OrangeBell />
      </View>
      <Text style={styles.date}>29.05.2022, 19:00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  newevs: {
    fontWeight: 'bold',
    fontSize: 17,
    margin: 10,
    marginTop: 30,
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
