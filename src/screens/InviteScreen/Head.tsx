import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ArrowBack from '../../../assets/SVG/Backicon.svg';
import {useNavigation} from '@react-navigation/native';

export default function Head() {
  const navigation = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowBack style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.invite}>Пригласить друга</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    marginLeft: 10,
    margin: 10,
    marginTop: 70,
  },

  invite: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 100,
    margin: 10,
    marginTop: 70,
  },
});
