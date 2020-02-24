import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => (state.products.availableProducts));

  const renderFunction = (itemData) => (
    <Text>{itemData.item.title}</Text>
  );
  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderFunction}
        numColumns={1}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ProductsOverviewScreen;
