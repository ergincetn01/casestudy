import { FlatList, View } from "react-native";
import RequestItem from "../components/RequestItem";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequests } from "../store/reducers/requests";

function RequestList() {
  const dispatch = useDispatch();
  
const requestContent= useSelector((state) => state.request_.content);
  function getRequests() {
    dispatch(fetchRequests());
  }

  useEffect(() => {
    getRequests();
  });
  const list = [
    "Dummy",
    "Dummy Data",
    "Duuuummmyyy Ddddaataaaa",
    "erg",
    "ergi",
    "ergin",
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sourceData, setSourceData] = useState(requestContent);

  function searchRequest(term) {
    if (term) {
      const newData = sourceData.filter(function (item) {
        const itemData = item ? item.toUpperCase() : "".toUpperCase();
        const textData = term.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData([...filteredData, newData]);
      setSearchTerm(term);
    } else {
      setFilteredData(sourceData);
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
          onChange={(text) => searchRequest(text)}
          searchTerm={searchTerm}
        />
      </View>
      <FlatList data={filteredData} renderItem={renderItem} />
    </View>
  );
}
export default RequestList;
