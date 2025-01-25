import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const OrderCard = ({ order }) => {
  const { date, status, items } = order;

  const renderItem = ({ item }) => (
    <Pressable onPress={() => console.log(`Pressed item: ${item.id}`)}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
    </Pressable>
  );

  return (
    <View style={styles.card}>
      <Text style={styles.dateText}>Order Date: {date}</Text>
      <Text style={styles.statusText}>Status: {status}</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.itemList}
      />
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
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
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});
