import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    marginBottom: 20,
  },

  column: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    fontSize: 14,
  },

  bandle: {
    backgroundColor: "#333333",
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    width: 25,
    height: 19,
    borderRadius: 999,
  },
});
