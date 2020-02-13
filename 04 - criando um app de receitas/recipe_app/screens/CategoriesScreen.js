import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => (
  <View style={styles.gridItem}>
    <Text>{ itemData.item.title }</Text>
  </View>
);

const CategoriesScreen = (props) => (
  <FlatList
    data={CATEGORIES}
    renderItem={renderGridItem}
    numColumns={2}
    keyExtractor={(item, index) => item.id}
  />
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
});

export default CategoriesScreen;
