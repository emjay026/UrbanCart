import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../GlobalStyles";
import BackButton from "../components/BackButton";

const ItemScreen = () => {
  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <View style={globalStyles.headerContainer}>
        <BackButton />
      </View>
      <View style={globalStyles.bodyContainer}>
        <Text>Item Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({});
