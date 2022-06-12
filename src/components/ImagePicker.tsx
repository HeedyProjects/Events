/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {View, Button} from 'react-native';

const takeAPhotoFromLibrary = () => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
  });
};

export default function Photo() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Загрузите фото" onPress={takeAPhotoFromLibrary} />
    </View>
  );
}
