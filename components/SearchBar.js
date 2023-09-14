import { StyleSheet, TextInput, View } from "react-native";

function SearchBar({searchTerm, onChange}) {

  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChange} value={searchTerm} style={styles.textInput} placeholder="Search requests...." />
    </View>
  );
}

const styles= StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        textAlign: "center",
      borderWidth: 1
    },
    textInput: {
        fontSize: 16, padding: 8
        // textAlign: "center"
    }
})

export default SearchBar;
