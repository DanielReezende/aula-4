import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333333",
    borderStyle: "solid",
    marginBottom: 8,
  },

  text: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
  },

  textDecoration: {
    textDecorationLine: "line-through",
    color: "#808080",
  },

  checkbox: {
    borderRadius: 6,
    height: 32,
    width: 32,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    height: 32,
    width: 32,

    alignItems: "center",
    justifyContent: "center",
  },
});
