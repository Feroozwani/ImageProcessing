import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CameraExample from './src/screens/CameraExample'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <CameraExample />
    </SafeAreaView>
  );
};

export default App;
