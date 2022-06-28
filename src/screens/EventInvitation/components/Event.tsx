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
          marginTop: 20,
          borderColor: 'lightgrey',
          borderRadius: 8,
          borderWidth: 1,
          marginLeft: 12,
          marginRight: 12,
          height: 100,
        }}>
        <Flower style={styles.title} />
        <Text style={styles.eves}>Выставка "Тайна Глубины"</Text>
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
    marginTop: 15,
    paddingBottom: 20,
    fontWeight: 'bold',
    marginLeft: -190,
  },

  date: {
    marginHorizontal: 10,
    marginLeft: 60,
    color: 'grey',
    padding: 8,
    marginTop: -50,
    margin: 20,
  },
  title: {
    marginTop: 25,
    marginLeft: 19,
    margin: 20,
  },
  bell: {
    marginTop: 25,
    marginLeft: -150,
    margin: 18,
  },
});
