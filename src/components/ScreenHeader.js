import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenHeader = ({ leftChild, centerChild, rightChild }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <View style={styles.leftContainer}>{leftChild}</View>
      <View style={styles.centerContainer}>{centerChild}</View>
      <View style={styles.rightContainer}>{rightChild}</View>
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
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  leftContainer: {
    flex: 3,
    alignItems: "flex-start",
    //borderWidth: 1,
  },
  centerContainer: {
    flex: 3,
    alignItems: "center",
    //borderWidth: 1,
  },
  rightContainer: {
    flex: 3,
    alignItems: "flex-end",
    //borderWidth: 1,
  },
});
