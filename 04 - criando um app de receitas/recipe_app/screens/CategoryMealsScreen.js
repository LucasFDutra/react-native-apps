import React from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector((state) => (
    state.meals.filteredMeals
  ));

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.contente}>
        <Text>
          No meals found, maybe check your filters!
        </Text>
      </View>
    );
  }

  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  contente: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
