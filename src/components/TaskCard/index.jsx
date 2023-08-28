import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Feather from "@expo/vector-icons/Feather";

import { styles } from "./styles";

export function TaskCard({ task, onTaskDone, onTaskDeleted }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={onTaskDone}
        activeOpacity={0.75}
      >
        {task.isDone && (
          <Feather name="check-circle" size={18} color="#5E60CE" />
        )}
        {!task.isDone && <Feather name="circle" size={18} color="#4EA8DE" />}
      </TouchableOpacity>
      <Text style={[styles.text, task.isDone && styles.textDecoration]}>
        {task.description}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onTaskDeleted}
        activeOpacity={0.75}
      >
        <Feather name="trash-2" size={17} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
