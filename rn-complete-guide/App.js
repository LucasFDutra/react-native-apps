import React, { useState } from 'react';
import {
  StyleSheet, View, Button, FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const cancelGoalAdditioHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => (
      currentGoals.filter((goal) => goal.id !== goalId)
    ));
  };

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        cancelGoalAdditioHandler={cancelGoalAdditioHandler}
      />
      <FlatList
        style={styles.listItemContainer}
        keyExtractor={(itemData) => itemData.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  listItemContainer: {
    marginBottom: 40,
  },

});
