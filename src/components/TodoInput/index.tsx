import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import { EvilIcons } from '@expo/vector-icons';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (!task)
      return;

    addTask(task);
    setTask('');
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
      />

      <TouchableOpacity style={styles.btn} onPress={handleAddNewTask}>
        <EvilIcons style={styles.btnText} name="plus" size={24}/>
      </TouchableOpacity>
    </View>
  )
}