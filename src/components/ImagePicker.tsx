import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {View, Button, StyleSheet} from 'react-native';

export default function Photo() {
  const takeAPhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => onSendPhotoMessage(image.path))
      .then(() => setPickerModalVisible(false));
  };
  return (
    <View style={styles.pic}>
      <Button title="Выбрать" onPress={takeAPhotoFromLibrary} />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    borderColor: '#F5F5F5',
    backgroundColor: '#F5F5F5',
    borderWidth: 2,
    borderRadius: 4,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  pic: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function setPickerModalVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function onSendPhotoMessage(path: string) {
  throw new Error('Function not implemented.');
}
