import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import { Ionicons } from '@expo/vector-icons';

import { MEALS } from '../data/dummy-data';
// import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = (props) => {
  // props.navigation.navigationOptions({
  //   headerRight: () => (
  //     <Button
  //       onPress={() => { console.log('aqui'); }}
  //       title='Update count'
  //     />
  //   ),
  // });

  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>

      <Text>dçlsalfjksdlçfjçsa</Text>
    </View>
  );
};

// MealDetailScreen.navigationOptions = (navigationData) => ({
//   headerRight: () => (
//     <Button onPress={() => { console.log('aqui'); }} title='fav' color='#fff' />
//   ),
// });


// function HomeScreen({ navigation }) {
//   const [count, setCount] = React.useState(0);


//   return <Text>Count: {count}</Text>;
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
