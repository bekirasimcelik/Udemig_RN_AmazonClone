import {ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import Services from '../components/Services';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <SubHeader />
      <Category />
      <Carousel />
      <Services />
    </ScrollView>
  );
}
