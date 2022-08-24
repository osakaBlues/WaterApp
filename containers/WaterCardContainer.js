import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import WaterCard from '../components/WaterCard';

const data = [
  {
    id: 1,
    name: 'Water',
    location: 'Location',
    image: require('../img/logo.png'),
  },
  {
    id: 2,
    name: 'Water',
    location: 'Location',
    image: require('../img/logo.png'),
  },
  {
    id: 3,
    name: 'Water',
    location: 'Location',
    image: require('../img/logo.png'),
  },
];

function WaterCardContainer() {
  return (
    <FlatList
      style={styles.block}
      data={data}
      renderItem={(item) => <WaterCard water={item.item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default WaterCardContainer;
