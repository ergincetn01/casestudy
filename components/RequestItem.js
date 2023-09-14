import { StyleSheet, Text, View } from "react-native";

function RequestItem({ itemData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>{itemData.item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 10,
  },
  itemText: {
    padding: 6,
    fontSize: 15,
  },
});

export default RequestItem;
