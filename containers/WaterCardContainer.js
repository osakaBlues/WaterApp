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
];

function a(d) {
  for (let i = 3; i < 20; i++) {
    d.push({
      id: i,
      name: 'Water',
      location: 'Location',
      image: require('../img/logo.png'),
    });
  }
}

a(data);

function WaterCardContainer() {
  return (
    <FlatList
      style={styles.block}
      columnWrapperStyle={styles.columnWrapperStyle}
      data={data}
      renderItem={(item) => <WaterCard water={item.item} />}
      keyExtractor={(item) => item.id}
      key={1}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  columnWrapperStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default WaterCardContainer;
