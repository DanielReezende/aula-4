import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A"
  },

  header: {
    backgroundColor: "#0D0D0D",
    padding: 24,
    paddingBottom: 100,
    alignItems: 'center',
  },

  content: {
    flex: 1,
    width: "100%",
    padding: 24,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginTop: -34,
    paddingHorizontal: 24,
  },
});
