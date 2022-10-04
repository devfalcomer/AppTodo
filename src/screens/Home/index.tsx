import React, { useState } from "react";
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';

import { View, Image, Alert } from "react-native";

import { Task, TaskList } from '../../components/TaskList';
import { TodoInput } from "../../components/TodoInput";
import { styles } from "./styles";
import { Contador } from "../../components/Contador";

export type EditTaskArgs = {
  taskId: number;
  taskNewTitle: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleTaskAdd(newTaskTitle: string) {
    const taskWithSameTitle = tasks.find(tasks => tasks.title === newTaskTitle);

    if (taskWithSameTitle) {
      return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome');
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks(oldTasks => [...oldTasks, newTask])
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))
    const taskToBeMarkedAsDone = updatedTasks.find(item => item.id === id);

    if (!taskToBeMarkedAsDone)
      return;

    taskToBeMarkedAsDone.done = !taskToBeMarkedAsDone.done;
    setTasks(updatedTasks);
  }

  function handleEditTask({ taskId, taskNewTitle }: EditTaskArgs) {
    const updatedTasks = tasks.map(task => ({ ...task }))
    const taskToBeUpdated = updatedTasks.find(task => task.id === taskId);

    if (!taskToBeUpdated)
      return;

    taskToBeUpdated.title = taskNewTitle;
    setTasks(updatedTasks);
  }

  function handleTaskRemove(id: number) {
    Alert.alert('Excluir Item', 'Tem certeza que você deseja remover esse item?', [

      {
        style: 'cancel',
        text: 'Não'
      },
      {
        style: 'destructive',
        text: 'Sim',
        onPress: () => {
          setTasks(oldTasks => oldTasks.filter(
            tasks => tasks.id !== id
          ));
        }
      }
    ])
  }

  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/logotodo.png')}
      />

      <TodoInput addTask={handleTaskAdd} />

      <Contador taskCounterCreate={tasks.length} taskCounterFinish={tasks.length} />

      <TaskList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleTaskRemove}
        editTask={handleEditTask}
      />
    </View>
  )
}