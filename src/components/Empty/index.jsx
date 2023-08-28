import React from "react";
import { Text, View } from "react-native";

import Feather from "@expo/vector-icons/Feather";

import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <Feather name="file-text" color="#808080" size={56} />

      <View style={styles.textContainer}>
        <Text style={styles.strong}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
