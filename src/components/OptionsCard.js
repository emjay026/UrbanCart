import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const OptionsCard = ({
  label,
  textColor = "#5D5D5D",
  centeredLabel = false,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        { justifyContent: centeredLabel ? "center" : "space-between" },
      ]}
      onPress={onPress}
    >
      <View style={[styles.textContainer]}>
        <Text style={[styles.text, { color: textColor }]}>{label}</Text>
      </View>
      {!centeredLabel && (
        <View style={styles.iconContainer}>
          <AntDesign name="right" size={28} color="#D6D6D6" />
        </View>
      )}
    </Pressable>
  );
};

export default OptionsCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#E1E1E1",
    padding: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },
  textContainer: { text: "center" },
  iconContainer: {},
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
});
