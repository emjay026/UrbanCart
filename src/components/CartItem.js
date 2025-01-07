import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import itemData from "../data/DummyData";

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={itemData[0].image} style={styles.img} />
      </View>
      <View style={styles.infoContainer}></View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 140,
    flexDirection: "row",
  },
  imageContainer: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    aspectRatio: 1,
    height: "100%",
    resizeMode: "contain",
    borderRadius: 20,
    backgroundColor: "#EFF1F0",
  },
  infoContainer: {
    flex: 1,
    borderWidth: 1,
  },
});
