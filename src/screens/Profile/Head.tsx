import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../../assets/SVG/Backicon.svg';

export default function Head() {
  const navigation = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.pr}>Профиль</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    margin: 10,
    marginTop: 60,
  },

  pr: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 150,
    margin: 10,
    marginTop: 60,
  },
});
