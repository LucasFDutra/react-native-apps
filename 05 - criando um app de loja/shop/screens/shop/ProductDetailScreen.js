import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector((state) => (
    state.products.availableProducts.find((prod) => prod.id === productId)
  ));
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
      <View style={styles.actions}>
        <Button
          title='Add to Cart'
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
          color={Colors.primary}
        />
      </View>
      <Text style={styles.price}>
        $
        {selectedProduct.price.toFixed(2)}
      </Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => ({
  // navData.navigation.params...
  headerTitle: navData.navigation.getParam('productTitle'),
});

const styles = StyleSheet.create({
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;