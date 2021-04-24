import { StatusBar } from 'expo-status-bar';
import React, {setState, useEffect, useState} from 'react';
import {Text, View } from 'react-native';
import styles from './styles';
import AddTodo from './src/components/addTodo';
import * as Font from 'expo-font';
import Todos from './src/components/todo';
import TodosList from './src/components/todo';


export default App = ()=> {
  [todos, setTodos] = useState([]);
  // useEffect(async ()=>{

  //   await Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //     ...Ionicons.font,
  //   }),[]
  // });

  async function Addedtd(todo){
      await setTodos([...todos, todo]);
     // console.log(todos);
  }

  async function updateList(newList)
  {
    console.log("New list = ");
    console.log(newList);
    setTodos(newList);
    console.log(todos);
  }
  
  return (
    
    <View style={styles.container}>
    <View style={styles.statusbar}>
    <StatusBar style='light' />
    <Text style={styles.header}>Todo List</Text>
    </View>
    <View style={styles.body}>
      <AddTodo AddedToDo = {Addedtd} ></AddTodo>
      <TodosList  list = {todos} onTaskDone={updateList}></TodosList>
    </View>
    </View>
  );
}

//  <TodosList onTaskDone ={updateList} list = {todos}></TodosList>

