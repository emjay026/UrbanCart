import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const InputBar = ({ label, icon, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={label} style={styles.input} />
      </View>
      <Pressable onPress={onPress}>
        <View style={styles.iconContainer}>{icon}</View>
      </Pressable>
    </View>
  );
};

export default InputBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    height: "100%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: "#EFF1F1",
  },
  iconContainer: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#EFF1F1",
  },
  input: {
    height: "100%",
    fontSize: 18,
  },
});
