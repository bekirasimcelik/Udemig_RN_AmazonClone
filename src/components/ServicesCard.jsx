import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function ServicesCard({item}) {
  return (
    <View>
      <View key={item.key} style={styles.outerContainer}>
        <Text style={styles.recentSerach}>item.title</Text>
        <Image source={item.image} style={styles.serviceImg} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 10,
    color: '#000',
    marginTop: 2,
  },
  serviceImg: {
    width: '100%',
    height: 130,
  },
  recentSerach: {
    fontSize: 13,
    marginBottom: 8,
    color: '#000',
  },
});
