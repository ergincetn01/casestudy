import { FlatList, View } from "react-native";
import RequestItem from "../components/RequestItem";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

function RequestList() {
    
  const list = [
    "agggggfsg",
    "gregrgrgrgggg",
    "grrhgrhrhrhh",
    "erg",
    "ergi",
    "ergin",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function searchRequest(term) {
    if (term) {
      const newData = list.filter(function (item) {
        const itemData = item ? item.toUpperCase() : "".toUpperCase();
        const textData = term.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchTerm(term);
    } else {
      setFilteredData(list);
      setSearchTerm(term);
    }
  }
  function renderItem(itemData) {
    return <RequestItem itemData={itemData} />;
  }

  return (
    <View>
      <View>
        <SearchBar
          onChange={(text)=>searchRequest(text)}
          searchTerm={searchTerm}
        />
      </View>
      <FlatList data={filteredData} renderItem={renderItem} />
    </View>
  );
}
export default RequestList;
