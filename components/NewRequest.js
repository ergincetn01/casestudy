import { Ionicons } from "@expo/vector-icons";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

function NewRequest() {
  const [isFileAttached, setIsFileAttached] = useState(false);
  function attachFile() {}

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.title}>Create New Request</Text>
      <View style={styles.formContainer}>
        <View style={styles.formFieldContainer}>
          <Text style={styles.formFieldTitle}>Subject</Text>
          <TextInput style={styles.subject} placeholder="Subject" />
        </View>
        <View style={styles.formFieldContainer}>
          <Text style={styles.formFieldTitle}>Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.description}
            placeholder="Description"
          />
        </View>
        <View style={styles.fileContainer}>
          <Text style={styles.formFieldTitle}>Attach file</Text>

          {isFileAttached ? (
            <View>File attached</View>
          ) : (
            <AntDesign
              name="addfile"
              size={24}
              color="black"
              onPress={attachFile}
              style={styles.file}
            />
          )}
        </View>
      </View>
      <View style={styles.submit}>
        <Button title="SUBMIT" color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 8,
    paddingVertical: 16,
  },
  formContainer: {
    padding: 16,
  },
  formFieldContainer: {
    padding: 8,
  },
  formFieldTitle: {
    paddingVertical: 6,
    fontSize: 18,
    textDecorationLine: "underline",
  },
  subject: {
    padding: 8,
    borderWidth: 1,
  },
  description: {
    padding: 8,
    borderWidth: 1,
    textAlignVertical: "top",
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 6,
    fontWeight: "bold",
  },
  fileContainer: { padding: 8 },
  file: {
    padding: 6,
  },
  submit: {
    padding: 6,
    width: 200,
    marginHorizontal: 16,
  },
});

export default NewRequest;
