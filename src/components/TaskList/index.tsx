import React from 'react';
import { FlatList, Image, Text } from "react-native";


import { EditTaskArgs } from '../../screens/Home';
import { ItemWrapper } from '../ItemWrapper';
import { TaskItem } from '../TaskItem';
import { styles } from './styles';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({ taskId, taskNewTitle} : EditTaskArgs) => void;
}

export function TaskList({ tasks, toggleTaskDone, removeTask, editTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{paddingBottom: 24}}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return(
          <ItemWrapper index={index}>
            <TaskItem 
              tasks={item}
              editTask={editTask}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
            />
          </ItemWrapper>
        )
      }}
      ListEmptyComponent={() => (
        <>
          <Image
            style={styles.iconTask}
            source={require('../../assets/icontask.png')}
          />
          <Text style={styles.text1Empty}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.text2Empty}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </>
      )}
    />
  )
}