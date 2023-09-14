import { View } from "react-native";
import RequestButton from "./RequestButton";
import { useNavigation } from "@react-navigation/native";

function AddNewRequest() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("NewRequest");
  }

  return (
    <View>
      <RequestButton onPress={handlePress} navigation={navigation} />
    </View>
  );
}

export default AddNewRequest;
