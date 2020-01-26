import React, { useState, useEffect } from 'react';
import {
  StyleSheet, TextInput, View, Button, Modal,
} from 'react-native';

const GoalInput = ({ addGoalHandler, visible, cancelGoalAdditioHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='ADD'
              onPress={() => { addGoalHandler(enteredGoal); goalInputHandler(''); }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='CANCEL'
              onPress={() => { cancelGoalAdditioHandler(); goalInputHandler(''); }}
              color='red'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 3,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
