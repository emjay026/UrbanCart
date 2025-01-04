import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../GlobalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import BackButton from "../components/BackButton";

const CartScreen = () => {
  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <View style={globalStyles.headerContainer}>
        <BackButton />
      </View>
      <View style={globalStyles.bodyContainer}>
        <Text>Cart Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
