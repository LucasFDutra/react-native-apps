// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Color';


import HeaderButton from '../components/HeaderButton';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      title: 'Meal Categories',
    },
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: {
      title: 'Category Meals',
    },
  },
  MealDetail: {
    screen: MealDetailScreen,
    navigationOptions: {
      title: 'Meal Detail',
      headerRight: () => (
        // <Button
        //   onPress={() => { console.log('aqui'); }}
        //   title='fav'
        // />
        <HeaderButton>
          <Ionicons name='md-remove' size={24} color='white' />
          {/* <Text>ola</Text> */}
        </HeaderButton>
      ),
    },
  },
}, {
  defaultNavigationOptions: {
    headerTintColor: Colors.fontsPrimaryColor,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
  },
});

export default createAppContainer(MealsNavigator);
