import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import ItemModal from "../modal/ItemModal";
import { useState } from "react";

const OrderCard = ({ order }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(order.cart_items[0]);

  const selectItem = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };

  const renderItem = ({ item }) => {
    const currentItem = item.item;
    return (
      <Pressable onPress={() => selectItem(item)}>
        <View style={styles.imgContainer}>
          <Image
            source={
              currentItem?.image
                ? { uri: currentItem.image }
                : require("../../assets/default_image.png")
            }
            style={styles.img}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.orderBoard}>
        <View style={styles.orderInfoRow}>
          <Text style={styles.boardText}>Order Date:</Text>
          <Text style={styles.boardInfo}>{order.time}</Text>
        </View>
        <View style={styles.orderInfoRow}>
          <Text style={styles.boardText}>Payment Status:</Text>
          <Text style={styles.boardInfo}>{order.payment_status}</Text>
        </View>
        <View style={styles.orderInfoRow}>
          <Text style={styles.boardText}>Order Status:</Text>
          <Text style={styles.boardInfo}>{order.order_status}</Text>
        </View>
        <View style={styles.orderInfoRow}>
          <Text style={styles.boardText}>Delivery street:</Text>
          <Text style={styles.boardInfo}>{order.address.street}</Text>
        </View>
        <View style={styles.orderInfoRow}>
          <Text style={styles.boardText}>Zip Code:</Text>
          <Text style={styles.boardInfo}>{order.address.zip}</Text>
        </View>
        <View style={styles.orderInfoRow}>
          <Text style={styles.boardText}>Item Count:</Text>
          <Text style={styles.boardInfo}>{order.item_count}</Text>
        </View>
        <View style={styles.orderInfoRow}>
          <Text style={styles.boardText}>Total Amount:</Text>
          <Text style={styles.boardInfo}>${order.total_amount}</Text>
        </View>
      </View>
      <View style={styles.itemList}>
        <FlatList
          data={order.cart_items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 15 }}
        />
      </View>
      <ItemModal
        visible={showModal}
        setVisible={setShowModal}
        cartItem={selectedItem}
        selectedStorage={selectedItem.variation.storage}
        selectedColor={selectedItem.variation.color}
      />
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 300,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingVertical: 20,
    borderRadius: 15,
    //borderWidth: 1,
  },
  orderInfoRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    //borderWidth: 1,
  },
  orderBoard: {
    height: "16%",
    marginRight: 20,
  },
  boardText: {
    fontSize: 14,
    fontWeight: "500",
  },
  boardInfo: {
    fontSize: 15,
    fontWeight: "600",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  statusText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  itemList: {
    //borderWidth: 1,
  },
  imgContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 20,
    backgroundColor: "#EFF1F0",
  },
});
