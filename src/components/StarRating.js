import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const StarRating = ({ rating, iconSize = 18, fontSize = 14 }) => {
  return (
    <View style={styles.container}>
      <Entypo name="star" size={iconSize} color="orange" />
      <Text style={[styles.text, { fontSize: fontSize }]}>{rating}</Text>
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    paddingLeft: 5,
  },
});
