import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Color';

const defaultStackNavOptions = {
  headerTintColor: Colors.fontsPrimaryColor,
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  // headerTitleStyle: {
  //   fontFamily: '...',
  // },
  // headerBackTitleStyle: {
  //   fontFamily: '...',
  // },
};

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      title: 'Meal Categories',
    },
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: {
    screen: MealDetailScreen,
  },
}, {
  defaultNavigationOptions: defaultStackNavOptions,
});

const FavNavigator = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      title: 'Your Favorites',
    },
  },
  MealDetail: {
    screen: MealDetailScreen,
  },
}, {
  defaultNavigationOptions: defaultStackNavOptions,
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />,
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      // tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />,
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFevTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(
    tabScreenConfig,
    {
      activeColor: 'white',
      shifting: true,
      // barStyle: { //para quando o shifting estiver desligado
      //   backgroundColor: Color.primaryColor,
      // },
    },
  )
  : createBottomTabNavigator(
    tabScreenConfig,
    {
      tabBarOptions: {
        activeTintColor: Colors.accentColor,
      },
    },
  );

const FilterNavigator = createStackNavigator({
  Filters: {
    screen: FiltersScreen,
    navigationOptions: {
      title: 'Filter Meals',
    },
  },
}, {
  defaultNavigationOptions: defaultStackNavOptions,
});

const MainNavigation = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFevTabNavigator,
    navigationOptions: {
      title: 'Meals Category',
    },
  },
  Filters: {
    screen: FilterNavigator,
  },
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontSize: 15,
    },
  },
});


export default createAppContainer(MainNavigation);
