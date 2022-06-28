import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Bell from '../../../../assets/SVG/Bell.svg';
import Flower from '../../../../assets/SVG/Flower.svg';

export default function New() {
  return (
    <View style={styles.container}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: -30,
        }}>
        <Flower style={styles.title} />
        <Text style={styles.eves}>Вечеринка "Only Jazz"</Text>
        <Bell style={styles.bell} />
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
    fontSize: 17,
    marginBottom: 70,
    padding: 12,
    marginTop: 30,
    paddingBottom: 20,
    fontWeight: 'bold',
    marginRight: 80,
  },

  date: {
    marginHorizontal: 10,
    marginLeft: 35,
    color: 'grey',
    padding: 8,
    marginTop: -70,
  },
  title: {
    marginTop: 40,
  },
  bell: {
    marginTop: 40,
  },
});
