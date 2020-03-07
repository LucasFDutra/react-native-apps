import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => (state.products.availableProducts));
  const dispatch = useDispatch();

  const renderFunction = (itemData) => (
    <ProductItem
      image={itemData.item.imageUrl}
      title={itemData.item.title}
      price={itemData.item.price}
      onViewDetail={() => {
        props.navigation.navigate({
          routeName: 'ProductDetail',
          params: {
            productId: itemData.item.id,
            productTitle: itemData.item.title,
          },
        });
      }}
      onAddToCart={() => {
        dispatch(cartActions.addToCart(itemData.item));
      }}
    />
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

ProductsOverviewScreen.navigationOptions = (navData) => ({
  headerTitle: 'All Products',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Cart'
        iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        onPress={() => {
          navData.navigation.navigate({ routeName: 'Cart' });
        }}
      />
    </HeaderButtons>
  ),
});
const styles = StyleSheet.create({

});

export default ProductsOverviewScreen;
