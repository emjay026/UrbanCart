import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenHeader = ({ leftChild, centerChild, rightChild }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <View>{leftChild}</View>
      <View>{centerChild}</View>
      <View>{rightChild}</View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "8%",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  leftContainer: {
    borderWidth: 1,
  },
  centerContainer: {
    borderWidth: 1,
  },
  rightContainer: {
    borderWidth: 1,
  },
});
