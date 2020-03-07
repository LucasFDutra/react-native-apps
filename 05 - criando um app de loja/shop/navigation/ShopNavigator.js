import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductsDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
  ProductsOverview: {
    screen: ProductsOverviewScreen,
  },
  ProductDetail: {
    screen: ProductsDetailScreen,
  },
  Cart: {
    screen: CartScreen,
  },

}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    },
    headerTintiColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
      color: 'white',
    },
    headerBackTitle: {
      fontFamily: 'open-sans',
    },
  },
});

export default createAppContainer(ProductsNavigator);
