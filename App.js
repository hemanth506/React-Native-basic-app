import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import React, { useState } from 'react';
import Header from "./components/header";
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

// todo app

export default function App() {

  const [ todos, setTodos ] = useState([
    { text: "Drink Milk", key: 1 },
    { text: "Learn React Native", key: 2 },
    { text: "Have dinner", key: 3 },
  ])

  const pressHandler = (key) => {
    console.log(key)
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (newItem) => {

    if(newItem.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: newItem, key: Math.random()},
          ...prevTodos,
        ]
      });
    } else {
      Alert.alert('Oops', 'Todo must be more than 3 chars', [
        {text: 'Okay', onPress:() => console.log('Alert closed')} 
      ])
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.basicContainer}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View styles={styles.list}>
            <FlatList 
              data={todos}    
              renderItem={({ item }) => (
                <TodoItem item={item} id={item.key} pressHandlerControl={pressHandler} />
              )}      
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    backgroundColor: '#fff',  
  },
  content : {
    flex: 1,
    padding: 40,
    // backgroundColor: 'yellow',
  },
  list: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'green',
  },
  
});
