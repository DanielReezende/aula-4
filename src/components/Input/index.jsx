import { useState } from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

export function Input({ ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocus]}
      {...rest}
      placeholderTextColor="#808080"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}
