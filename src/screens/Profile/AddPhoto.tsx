import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Add from '../../../assets/SVG/Add.svg';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
//добавляется только второе выбранное фото
export default function AddPhoto() {
  const [defaultPhoto, setDefaultPhoto] = useState('');
  const [path, setPath] = useState<string | undefined>('');
  const [filename, setFilename] = useState<string | undefined>('');

  const setDefault = async () => {
    const url =  await storage().ref('UserPhotos/default.png').getDownloadURL();
    setDefaultPhoto(url);
  }
  
  setDefault();

  // ------galery access-------
  const choosePhotoFromLibrary = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        const uri = image.sourceURL;
        const finalUri = Platform.OS === 'ios' ? uri?.replace('file://', '') : uri;
        setPath(finalUri);
        const finalImage = image.filename;
        setFilename(finalImage);
        //console.log('image', image.path, image.filename, image.sourceURL);
      })
      // .then(() => setModalVisible(false));
  };
  console.log('image', path, filename);

  const reference = filename === '' ? null : storage().ref(`UserPhotos/${filename}`);
  
  return (
    <View style={styles.photo}>
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{position: 'absolute', zIndex: 1, right: 110, top: -15}}
        onPress={ async() => {
          //toggleModal();
          choosePhotoFromLibrary();
          // path to existing file on filesystem

            const pathToFile = `${path}`;

            // uploads file
            console.log('ffffffff', pathToFile);
            
            await reference?.putFile(pathToFile);

            
        }}>
        <Add style={styles.camera} />
      </TouchableOpacity>
      <Image
        source={{uri : path === ''? defaultPhoto: path}}
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
