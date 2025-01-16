import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";

const Loading = ({ loading }) => {
  return (
    loading && (
      <View style={styles.loadingOverlay}>
        <ActivityIndicator size="large" color="#17BC58" />
      </View>
    )
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});
