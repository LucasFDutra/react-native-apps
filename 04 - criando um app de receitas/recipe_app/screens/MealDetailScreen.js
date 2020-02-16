import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import { Ionicons } from '@expo/vector-icons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <HeaderButton style={styles.favoritButton} onPress={() => { console.log('aqui'); }}>
        <Text>favorito</Text>
      </HeaderButton>
    </View>
  );
};

// MealDetailScreen.navigationOptions = (navigationData) => {
//   const mealId = navigationData.navigation.getParam('mealId');
//   const selectedMeal = MEALS.find((meal) => meal.id === mealId);

//   return {
//     headerTitle: selectedMeal.title,
//     headerRight: () => (

//     ),
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  favoritButton: {
    marginTop: 10,
    marginRight: 10,
  },
});

export default MealDetailScreen;
