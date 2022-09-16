import { View, Text, TextInput, Keyboard, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
const Form = (props) => {
  const [task, setTask] = useState('')
  const handleAddTask =()=> {
    if(task.length === 0){
      alert("Bạn vui lòng nhập vào text!!!")
      return false;
    }
    props.onAddTask(task);
    setTask('')
    Keyboard.dismiss()
  }
  return (
    <View style={styles.addTask}>
    <TextInput placeholder='text here' 
             value={task}
             onChangeText={(text) =>  setTask(text)}
               style={styles.input}/>
        <TouchableOpacity
           onPress={handleAddTask}
        >
         <View style={styles.iconWaper}>
            <Text style={styles.icon}>+</Text>
         </View>
        </TouchableOpacity>
    </View>
  )
}

export default Form