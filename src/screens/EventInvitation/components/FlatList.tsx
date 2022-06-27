import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import FlatListItem from '../../FriendsScreen/components/FlatListItem';
interface friendType {
  friend: {
    photo: ImageSourcePropType;
    name: string;
    commonEvents: number;
  };
}

export default function Ev() {
  return (
    <View>
      <FlatListItem
        friend={{
          photo: 1,
          name: 'Анна Еремина',
          commonEvents: 1,
        }}
      />
    </View>
  );
}
