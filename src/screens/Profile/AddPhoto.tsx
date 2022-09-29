import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Add from '../../../assets/SVG/Add.svg';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export default function AddPhoto() {
  const reference = storage().ref(
    'gs://events-9ecb5.appspot.com/UserPhotos/1.jpeg',
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // ------galery access-------
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => setImage(image.path))
      .then(() => setModalVisible(false));

    console.log('image', image);
  };
  return (
    <View style={styles.photo}>
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{position: 'absolute', zIndex: 1, right: 110, top: -15}}
        onPress={async () => {
          // path to existing file on filesystem
          const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/gs://events-9ecb5.appspot.com/UserPhotos/1.jpeg'`;
          // uploads file
          await reference.putFile(pathToFile);
        }}>
        <Add style={styles.camera} />
      </TouchableOpacity>
      <Image
        source={require('../../../assets/profileIcons/girl.jpeg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    margin: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    borderRadius: 8,
    width: 112,
    height: 112,
  },
  camera: {
    width: 40,
    height: 40,
  },
});
