import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import Form from './components/Form';
import styles from './App.style.components';
import { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) =>{
    setTaskList([...taskList, task]);
  }
  const handleDeleteTask = (index) =>{
    Alert.alert(
      "Thông báo",
      "Bạn chắc chắn muốn xóa chứ ?",
      [
        {
          text: "OK",
          onPress: () =>  {
           let taskListTmp = [...taskList];
           taskListTmp.splice(index,1);
           setTaskList(taskListTmp); 
          },
        },
        { text: "Cancel", onPress: () => {} }
      ]
    );
  }
  return (
    <View style={styles.container}>
      
    <View style={styles.body}>
         <Text style={styles.text}> Todo list</Text>
         <ScrollView>
         {
          taskList.map((item , index) => {
            return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
          })
         }
         </ScrollView>
      </View> 
      <Form onAddTask={handleAddTask}/> 
    </View>
  );
}


