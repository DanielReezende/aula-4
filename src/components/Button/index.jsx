import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./styles";

export function Button({ ...rest }) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Feather name="plus-circle" color="#f2f2f2" size={18} />
    </TouchableOpacity>
  );
}
