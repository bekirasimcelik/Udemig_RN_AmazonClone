import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import Carousel from '../components/Carousel';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <SubHeader />
      <Category />
      <Carousel />
    </ScrollView>
  );
}
