import React from 'react';
import { View, Alert, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import ExerciseData from '../components/ExerciseData';
import ImagePreview from '../components/ImagePreview';
import CameraGalleryButton from '../components/CameraGalleryButton';
import { baseUrl, token } from '../../env';

const CameraExample = () => {
  const [image, setImage] = React.useState(null);
  const [exerciseData, setExerciseData] = React.useState(null);

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
      includeBase64: false,
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        Alert.alert('User cancelled camera');
      } else if (response.error) {
        Alert.alert('Camera error: ', response.error);
      } else if (response.assets) {
        const imageUri = response.assets[0].uri;
        setImage(imageUri);
        callImageRecognitionApi(imageUri);
      }
    });
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('User cancelled image picker');
      } else if (response.error) {
        Alert.alert('ImagePicker error: ', response.error);
      } else if (response.assets) {
        const imageUri = response.assets[0].uri;
        setImage(imageUri);
        callImageRecognitionApi(imageUri);
      }
    });
  };

  const callImageRecognitionApi = async imageUri => {
    const formData = new FormData();
    formData.append('size', 500);
    formData.append('image', {
      name: 'image',
      type: 'image/png',
      uri: Platform.OS === 'android' ? imageUri : imageUri.replace('file://', ''),
    });

    try {
      const response = await axios.post(`${baseUrl}/api/exercise/search`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image recognition response:', response.data);
      setExerciseData(response.data[0]);
      Alert.alert('Success', 'Image recognized successfully!');
    } catch (error) {
      console.error('Error during image recognition:', error.response ? error.response.data : error.message);
      Alert.alert('Error', error.response?.data?.message || 'An unknown error occurred during image recognition');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <ImagePreview imageUri={image} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 60, marginTop: 20 }}>
        <CameraGalleryButton title="Open Camera" onPress={openCamera} />
        <CameraGalleryButton title="Open Gallery" onPress={openGallery} />
      </View>
      <ExerciseData data={exerciseData} />
    </View>
  );
};

export default CameraExample;
