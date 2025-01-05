import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../GlobalStyles";
import BackButton from "../components/BackButton";

const ItemScreen = ({ route }) => {
  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <View style={globalStyles.headerContainer}>
        <BackButton />
      </View>
      <View style={globalStyles.bodyContainer}>
        <Text style={styles.text}>{route.params.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
