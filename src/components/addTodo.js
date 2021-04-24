import React , {useState, Component} from 'react';
import {ProgressViewIOSComponent, Text, View } from 'react-native';

import { Container, Header, Content, Item, Input, Button } from 'native-base';
import styles from '../../styles';

const AddTodo = (props)=>{
    [todoText, setText] = useState("");
    
    const Add =()=>{
        let todo ={title:todoText, done:false};
        props.AddedToDo(todo);
        setText("");
    };

    return(
        
     
          <Item style={styles.addtodo}>
            <Input placeholder="Add To-do" value={todoText} style={styles.tb}
             onChangeText={(txt)=>setText(txt)}/>
          <Button success rounded style={styles.button}
          onPress= {Add}>
          
              <Text style={{justifyContent:'center', color:'white'}}>Add</Text></Button>
           
          </Item>

 
    );
};

export default  AddTodo;