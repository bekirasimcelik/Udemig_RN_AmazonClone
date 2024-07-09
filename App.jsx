import {View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#9ee4d4'} barStyle={'dark-content'} />
      <HomeScreen />
    </SafeAreaView>
  );
}
