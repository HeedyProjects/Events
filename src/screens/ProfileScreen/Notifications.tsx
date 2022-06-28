import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Toggle from '../../../assets/SVG/Toggle.svg';
import Photo from '../../components/ImagePicker';

export default function Notifications() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.nots}>Уведомления</Text>
        <Toggle style={styles.image} />
        <View style={styles.photo}>
          <Photo />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    position: 'absolute',
    top: 100,
    right: 15,
  },
  textBut: {
    position: 'absolute',
    top: 100,
    left: 16,
    fontWeight: 'bold',
    fontSize: 19,
  },
  nots: {
    fontWeight: 'bold',
    fontSize: 19,
    margin: 10,
    marginTop: 40,
    marginLeft: 16,
  },

  image: {
    margin: 10,
    marginTop: 30,
    marginRight: 15,
  },
});
