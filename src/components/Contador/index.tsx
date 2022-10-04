import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface ContadorProps {
  taskCounterCreate: number;
  taskCounterFinish: number;
}

export function Contador({ taskCounterCreate, taskCounterFinish }: ContadorProps) {
  const tasksCounterCreate = taskCounterCreate === 1 ? 'Criada' : 'Criadas';
  const tasksCounterFinish = taskCounterFinish === 1 ? 'Concluida' : 'Concluidas';

  return (
    <>
      <View style={styles.counterContainer}>
        <Text style={styles.create}>{tasksCounterCreate} {taskCounterCreate}</Text>
        <Text style={styles.finish}>{tasksCounterFinish} {taskCounterFinish}</Text>
      </View>
      <View style={styles.iconsDivider} />
    </>
  )
}