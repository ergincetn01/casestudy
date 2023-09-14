import { StyleSheet, Text, View } from "react-native";
import RequestButton from "./RequestButton";
import { useNavigation } from "@react-navigation/native";

function AddNewRequest() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("NewRequest");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Request</Text>
      <RequestButton onPress={handlePress} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
  },
});

export default AddNewRequest;
