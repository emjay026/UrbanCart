import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenHeader from "../components/ScreenHeader";
import BackButton from "../components/BackButton";

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader
        leftChild={<BackButton />}
        centerChild={<Text style={styles.titleText}>Orders</Text>}
      />
      <View style={styles.bodyContainer}>
        <Text>Order Screen</Text>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
