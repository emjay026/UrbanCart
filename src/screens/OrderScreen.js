import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import React, { useEffect } from "react";
import ScreenHeader from "../components/ScreenHeader";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "../components/OrderCard";
import { setOrdersError } from "../redux/features/orders/OrderSlice";
import PopupMenu from "../components/PopupMenu";
import { MenuProvider } from "react-native-popup-menu";

const OrderScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { orderList, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
      dispatch(setOrdersError(null));
    }
  }, [dispatch, error]);

  return (
    <View style={styles.container}>
      <ScreenHeader
        leftChild={<BackButton />}
        centerChild={<Text style={styles.titleText}>Orders</Text>}
        rightChild={<PopupMenu />}
      />

      <View style={styles.bodyContainer}>
        <FlatList
          data={orderList}
          renderItem={({ item }) => <OrderCard order={item} />}
          contentContainerStyle={{ gap: 20 }}
        />
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F1",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
