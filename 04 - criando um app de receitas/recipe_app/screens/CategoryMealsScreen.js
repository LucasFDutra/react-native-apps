import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const CategoryMealsScreen = (props) => (
  <View style={styles.screen}>
    <Text>The category meals screen!</Text>
    <Button
      title='Go to Meal Detail'
      onPress={() => {
        props.navigation.navigate({
          routeName: 'MealDetail',
        });
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
