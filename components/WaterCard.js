import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

/**
 * Todo - add TouchableOpacity to each card to open the details screen
 */

function WaterCard({ water }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={water.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{water.name}</Text>
        <Text style={styles.subtitle}>{water.location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
  },
});

export default WaterCard;
