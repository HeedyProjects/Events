import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Flower from '../../../../assets/SVG/Flower.svg';
import OrangeBell from '../../../../assets/SVG/Orangebell.svg';

export default function Adds() {
  return (
    <View style={styles.container}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: -20,
        }}>
        <Flower style={styles.title} />
        <Text style={styles.eves}>Вечеринка "Мы"</Text>
        <OrangeBell style={styles.bell} />
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
    paddingBottom: 20,
  },

  eves: {
    fontSize: 17,
    marginBottom: 70,
    padding: 12,
    marginTop: 30,
    paddingBottom: 20,
    fontWeight: 'bold',
    marginRight: 120,
  },

  date: {
    marginHorizontal: 10,
    marginLeft: 40,
    color: 'grey',
    padding: 8,
    marginTop: -70,
  },
  title: {
    marginTop: 40,
  },
  bell: {
    marginTop: 40,
    marginLeft: -20,
    paddingEnd: -5,
  },
});
