import React from 'react';
import { Image } from 'react-native';

const ImagePreview = ({ imageUri }) => {
  if (!imageUri) return null;

  return (
    <Image
      source={{ uri: imageUri }}
      style={{ width: 200, height: 200, marginTop: 20, alignSelf: 'center' }}
    />
  );
};

export default ImagePreview;
