import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import PrimeLogo from '../assets/prime-logo.png';
import {ProductData} from '../data/ProductData';
import {getRaid} from '../utils/helpers';

export default function ProductScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.tagline}>
          Price and other details may vary based on product aside and color.
        </Text>
        {ProductData.map(item => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image style={styles.productImg} source={item.image} />
            </View>
            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productName}</Text>
              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating}</Text>
                {getRaid(item.rating)}
                <Text style={styles.ratingCount}>{item.ratingCount}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.crossOut}>${item.crossOutText}</Text>
              </View>
              <Text styl={styles.cashBack}>
                Up to %5 cashback with Amazon Pay Credit Card
              </Text>
              <Image source={PrimeLogo} style={styles.logo} />
              <Text style={styles.cashBack}>
                FREE Delivery {item.deliveryBy}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  tagline: {
    fontSize: 11,
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 15,
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center',
  },
  productImg: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
    color: '#000000',
  },
  productName: {
    fontSize: 12,
    color: '#000000',
    lineHeight: 18,
  },
  rating: {
    fontSize: 10,
    color: '#017185',
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: '#017185',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  price: {
    fontSize: 16,
    color: '#000000',
    marginRight: 5,
  },
  crossOut: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashBack: {
    fontSize: 9,
    marginVertical: 3,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
});
