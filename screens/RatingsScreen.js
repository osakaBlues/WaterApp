import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function RatingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ratings Screen</Text>
      <Button title="Go to Details" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RatingsScreen;
