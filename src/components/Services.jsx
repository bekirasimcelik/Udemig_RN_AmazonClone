import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import ScanQR from '../assets/scan-qr.jpeg';
import PayBills from '../assets/pay-bills.jpeg';
import {RecentSearchData} from '../data/RecentSearchData';

export default function Services() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
      style={styles.container}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.imgStyle} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.imgStyle} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={ScanQR} style={styles.imgStyle} />
            <Text style={styles.title}>Scan QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.imgStyle} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map(item => (
        <View key={item.key} style={styles.outerContainer}>
          <Text style={styles.recentSerach}>item.title</Text>
          <Image source={item.image} style={styles.serviceImg} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -80,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
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
  outerContainer: {
    backgroundColor: '#fff',
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
});
