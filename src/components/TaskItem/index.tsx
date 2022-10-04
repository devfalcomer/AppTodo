import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, TextInput } from "react-native";

import { EditTaskArgs } from '../../screens/Home';
import { Task } from '../TaskList';
import { styles } from './styles';


import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

interface TaskItemProps {
  tasks: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({ taskId, taskNewTitle }: EditTaskArgs) => void;
}

export function TaskItem({ tasks, editTask, removeTask, toggleTaskDone }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskNewTitleValue, setTaskNewTitleValue] = useState(tasks.title);
  const textInputRef = useRef<TextInput>(null);

  function handleStartEditing() {
    setIsEditing(true);
  }

  function handleCancelEditing() {
    setTaskNewTitleValue(tasks.title);
    setIsEditing(false);
  }

  function handleSubmitEditing() {
    editTask({ taskId: tasks.id, taskNewTitle: taskNewTitleValue });
    setIsEditing(false);
  }

  useEffect(() => {
    if (textInputRef.current) {
      if (isEditing) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }, [isEditing])
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(tasks.id)}
        >
          <View
            style={tasks.done ? styles.taskMarkerDone : styles.taskMarker}
          >
            {tasks.done && (
              <Image
                style={styles.taskMarkerDone}
                source={require('../../assets/marker.png')}
              />
            )}
          </View>

          <TextInput
            value={taskNewTitleValue}
            onChangeText={setTaskNewTitleValue}
            editable={isEditing}
            onSubmitEditing={handleSubmitEditing}
            style={tasks.done ? styles.taskTextDone : styles.taskText}
            ref={textInputRef}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        {isEditing ? (
          <TouchableOpacity
            onPress={handleCancelEditing}
          >
            <FontAwesome name="remove" size={20} color="#808080" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleStartEditing}
          >
            <Feather name="edit" size={15} color="#808080" />
          </TouchableOpacity>
        )}

        <View style={styles.iconsDivider} />
        <TouchableOpacity
          onPress={() => removeTask(tasks.id)}
          disabled={isEditing}
        >
          <Image source={require('../../assets/trash.png')} style={{ opacity: isEditing ? 0.2 : 1 }} />
        </TouchableOpacity>

      </View>
    </View>
  )
}