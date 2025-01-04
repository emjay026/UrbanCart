import { StyleSheet, Text, Pre, Pressable } from "react-native";
import React from "react";
import globalStyles, { colorScheme } from "../GlobalStyles";

const IconButton = ({ child, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {child}
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colorScheme.textGray,
    borderRadius: 100,
    backgroundColor: "white",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
