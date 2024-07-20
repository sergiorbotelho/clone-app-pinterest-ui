import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";
export default function Messages() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menssages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
