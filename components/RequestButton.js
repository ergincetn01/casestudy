import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, View } from "react-native";

function RequestButton({ onPress, navigation }) {
  return (
    <View style={styles.buttonContainer}>
      {/* <Button title="+" onPress={onPress} /> */}
      <Ionicons name="add-circle" size={24} color="blue" onPress={onPress} style={styles.icon} />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    margin: 4,
    borderRadius: 50,
    borderColor: "black", justifyContent: "center"
  },
  icon: {
    fontSize:50
  }
});
export default RequestButton;
