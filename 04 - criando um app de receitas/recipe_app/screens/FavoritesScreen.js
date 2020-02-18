import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => (
    state.meals.favoriteMeals
  ));

  return (
    <MealList listData={favMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = (navData) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Menu'
        iconName='md-menu'
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

export default FavoritesScreen;
