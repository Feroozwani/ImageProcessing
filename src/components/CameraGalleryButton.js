import React from 'react';
import { View, Button } from 'react-native';

const CameraGalleryButton = ({ title, onPress }) => (
  <View style={{ flex: 1, margin: 10 }}>
    <Button title={title} onPress={onPress} />
  </View>
);

export default CameraGalleryButton;
