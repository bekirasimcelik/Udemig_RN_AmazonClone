import {StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#9ee4d4'} barStyle={'dark-content'} />
      <Router />
    </SafeAreaView>
  );
}
