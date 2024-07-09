import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';

export default function Category() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <TouchableOpacity style={styles.category}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/fresh.jpeg')}
        />
        <Text style={styles.title}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/fresh.jpeg')}
        />
        <Text style={styles.title}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/fresh.jpeg')}
        />
        <Text style={styles.title}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/fresh.jpeg')}
        />
        <Text style={styles.title}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/fresh.jpeg')}
        />
        <Text style={styles.title}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/fresh.jpeg')}
        />
        <Text style={styles.title}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/fresh.jpeg')}
        />
        <Text style={styles.title}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/fresh.jpeg')}
        />
        <Text style={styles.title}>Category</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
  title: {
    color: '#2c4341',
  },
});
