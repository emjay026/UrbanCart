import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

const SubmitButton = ({
  label,
  status = true,
  onPress,
  width = "50%",
  height = 70,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        {
          width: width,
          height: height,
          opacity: pressed ? 0.5 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
        {
          opacity: !status ? 0.3 : 1,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#17BC58",
  },

  addToCartText: {
    fontSize: 22,
    fontWeight: "500",
    color: "white",
  },
});
