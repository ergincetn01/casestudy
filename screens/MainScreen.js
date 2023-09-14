import { FlatList, StyleSheet, Text, View } from "react-native";
import RequestButton from "../components/RequestButton";
import SearchBar from "../components/SearchBar";
import AddNewRequest from "../components/AddNewRequest";
import RequestList from "./RequestList";
import { useState } from "react";

function MainScreen() {
  //fetch required thing in a list and display them in flt list
  const list = ["agggggfsg", "gregrgrgrgggg", "grrhgrhrhrhh", "erg", "ergi", "ergin"];

  const [searchTerm, setSearchTerm] = useState("");
const [filteredData, setFilteredData]= useState([]);

  function searchRequest(term){
    if (term) {
        const newData = list.filter(
          function (item) {
            const itemData = item.title
              ? item.title.toUpperCase()
              : ''.toUpperCase();
            const textData = term.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredData(newData);
        setSearchTerm(term);
    
  }
  else {
     setFilteredData(list);
      setSearchTerm(term);
  }
 
}
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
