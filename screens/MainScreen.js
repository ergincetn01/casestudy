import {StyleSheet,View} from "react-native";
import AddNewRequest from "../components/AddNewRequest";
import RequestList from "./RequestList";

function MainScreen() {

  return (
    <View style={styles.mainContainer}>
      <AddNewRequest />
      <View>
        <RequestList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    marginVertical: 10,
    padding: 10,
  },
  buttonContainer: {
    textAlign: "center",
    borderRadius: 16,
  },
});

export default MainScreen;
