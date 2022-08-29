import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function WaterCardDetailsScreen() {
  return (
    <View style={styles.block}>
      <Image style={styles.image} source={require('../img/logo.png')} />
      <Text style={styles.text}>WaterCardDetailsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontweight: 'bold',
  },
});

export default WaterCardDetailsScreen;
