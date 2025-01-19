import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import ScreenHeader from "../components/ScreenHeader";
import IconButton from "../components/IconButton";
import Entypo from "@expo/vector-icons/Entypo";
import CartListCard from "../components/CartListCard";
import SubmitButton from "../components/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CartScreen = () => {
  const { cartList } = useSelector((state) => state.cart);

  return (
    <View style={styles.container}>
      <ScreenHeader
        leftChild={<BackButton />}
        centerChild={<Text style={styles.titleText}>My Cart</Text>}
        rightChild={
          <IconButton
            icon={
              <Entypo
                name={"dots-three-horizontal"}
                size={25}
                color={"#6E6E6E"}
              />
            }
            onPress={() => console.log("More")}
          />
        }
      />
      <View style={styles.bodyContainer}>
        <FlatList
          data={cartList}
          renderItem={({ item }) => <CartListCard cartItem={item} />}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#D6D6D6" }} />
          )}
          contentContainerStyle={{ gap: 15 }}
        />
      </View>
      <View style={styles.buttonSection}>
        <SubmitButton
          label={"Checkout"}
          width="80%"
          onPress={() => console.log("Checkout")}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bodyContainer: {
    flex: 1,
    padding: 20,
  },

  buttonSection: {
    width: "100%",
    height: "14%",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#D6D6D6",
    paddingTop: 15,
    paddingBottom: 32,
    paddingHorizontal: 25,
  },
  buttonContainer: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#17BC58",
  },

  addToCartText: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
});
