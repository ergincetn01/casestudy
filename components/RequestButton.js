import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

function RequestButton({ onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Ionicons
        name="add-circle"
        size={24}
        color="blue"
        onPress={onPress}
        style={styles.icon}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    margin: 4,
    borderRadius: 50,
    borderColor: "black",
    justifyContent: "center",
  },
  icon: {
    fontSize: 50,
  },
});
export default RequestButton;
