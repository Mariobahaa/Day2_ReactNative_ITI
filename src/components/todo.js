import React , {useState, Component} from 'react';
import { View, FlatList, Text } from 'react-native';

import styles from '../../styles';
import CheckBox from '@react-native-community/checkbox';

//updatelist => fn of parent to invoke
const TodosList = ({list,onTaskDone})=>{

    [tasksDone, setTasksDone] = useState(0);

    async function TaskDone(ind){
       
        let newlist = [...list];
        newlist.splice(ind,1);
        await setTasksDone(++tasksDone);
        //setTasksDone(++tasksDone);
        //setlst(newlist);
        await 
            onTaskDone(newlist);
       
    }
    return(
        <FlatList
            data={list}
            renderItem={({item, index})=>{
                return (
                    <View style={styles.todoitem}>
                        <Text style={{fontSize:16}}>Title: {item.title}</Text>
                        <CheckBox value={item.done} onValueChange={(newValue)=>{TaskDone(index);this.value = item.done;}}
                         />
                      
                    </View>
                )
            }}
            keyExtractor={(item,index)=>(item.title.toString()+index.toString())}
            ListHeaderComponent={()=>{
                return(<Text style={{padding:'3%', textAlign:'center'}}>
                    You Completed {tasksDone} Tasks 
                </Text>)
            }}
          >

            </FlatList>
    );
}

export default TodosList;
//{tasksDone}
//  // onChange= {TaskDone(index)}/>


// import React , {useState, Component} from 'react';
// import {ProgressViewIOSComponent,  View, FlatList, Text } from 'react-native';

// import styles from '../../styles';
// import CheckBox from '@react-native-community/checkbox';

// //updatelist => fn of parent to invoke
// const TodosList = (props)=>{

//     [tasksDone, setTasksDone] = useState(0);
//     [lst, setlst] = useState(props.list);

//     console.log(lst);

//     async function TaskDone(ind){

//         let newlist = await lst.splice(ind,1);
//         await setTasksDone(++tasksDone);
//         setlst(newlist);
//         props.onTaskDone(newlist);
//     }
//     return(
//         <FlatList
//             data={lst}
//             renderItem={({item, index})=>{
//                 return (
//                     <View>
//                         <Text style={{fontSize:16}}>Title: {item.title}</Text>
//                         <CheckBox value={item.done} 
//                         onChange= {TaskDone(index)}/>
//                     </View>
//                 )
//             }}
//             ListHeaderComponent={()=>{
//                 return(<Text>
//                     You Completed {tasksDone} Tasks
//                 </Text>)
//             }}
//           >

//             </FlatList>
//     );
// }

// export default TodosList;