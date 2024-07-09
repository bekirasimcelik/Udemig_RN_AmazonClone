import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function SubHeader() {
  return (
    <View>
      <LinearGradient
        style={styles.container}
        colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}>
        <Feather name="map-pin" size={16} colors="#000" />
        <Text style={styles.deliver}>Deliver to Turkey - 1234567</Text>
        <SimpleLineIcons name="arrow-down" size={10} colors="#000" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliver: {
    fontSize: 13,
    color: '#2c4341',
    paddingHorizontal: 6,
  },
});
