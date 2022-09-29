import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Camera from '../../../assets/SVG/Camera.svg';
import ImagePicker from 'react-native-image-crop-picker';
import {getStorage, ref, getDownloadURL} from '@react-native-firebase/storage';

export default function AddPhoto() {
  const [url, setUrl] = useState();

  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, '/1.png');
      await getDownloadURL(reference).then(
        (x: React.SetStateAction<undefined>) => {
          setUrl(x);
        },
      );
    };
    if (url == undefined) {
      func();
    }
  }, [url]);

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
      {image ? (
        <ImageBackground
          source={{
            uri: url,
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 70,
            width: 70,
          }}
        />
      ) : (
        <Camera style={styles.pic} />
      )}

      <TouchableOpacity onPress={choosePhotoFromLibrary}>
        <Text style={styles.text}>Добавить фото</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    borderColor: '#E1E1E1',
    backgroundColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 24,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },

  text: {
    margin: 10,
    color: '#A3A3A3',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: -0.41,
  },

  pic: {},
});
// function ref(arg0: string) {
//   throw new Error('Function not implemented.');
// }
