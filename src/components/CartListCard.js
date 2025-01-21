import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import ItemModal from "../modal/ItemModal";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deleteCartItem,
  updateCartItem,
} from "../services/database/cart/CartDBOps";

const CartListCard = ({ cartItem }) => {
  const item = cartItem.item;

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [itemQuantity, setitemQuantity] = useState(cartItem.quantity);

  const [selectedStorage, setSelectedStorage] = useState(
    cartItem.variation.storage
  );
  const [selectedColor, setSelectedColor] = useState(cartItem.variation.color);

  useEffect(() => {
    dispatch(
      updateCartItem({
        ...cartItem,
        quantity: itemQuantity,
        variation: { storage: selectedStorage, color: selectedColor },
      })
    );
  }, [selectedStorage, selectedColor, itemQuantity]);

  return (
    <Pressable onPress={() => setShowModal(true)}>
      <ItemModal
        visible={showModal}
        setVisible={setShowModal}
        cartItem={cartItem}
        selectedStorage={selectedStorage}
        selectedColor={selectedColor}
        setSelectedStorage={setSelectedStorage}
        setSelectedColor={setSelectedColor}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.img} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.itemDescription}>
            <View style={styles.titleRow}>
              <Text
                style={styles.titleText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
              <View style={styles.attributeRow}>
                <Text style={styles.attrText}>
                  {Object.values(cartItem.variation)
                    .filter((value) => value !== undefined && value !== null)
                    .join(", ")}
                </Text>
              </View>
            </View>
            <Pressable onPress={() => dispatch(deleteCartItem(cartItem.id))}>
              <View style={styles.closeButton}>
                <AntDesign name="close" size={22} color={"#6E6E6E"} />
              </View>
            </Pressable>
          </View>
          <View style={styles.quantityRow}>
            <Text style={styles.priceText}>${item.price}</Text>
            <View style={styles.quantitySetContainer}>
              <Pressable
                onPress={() => setitemQuantity((prev) => Math.max(1, prev - 1))}
              >
                <View style={styles.quantitySetButton}>
                  <AntDesign name="minus" size={20} color={"#6E6E6E"} />
                </View>
              </Pressable>
              <View style={styles.quantityTextContainer}>
                <Text style={styles.quantityText}>{itemQuantity}</Text>
              </View>
              <Pressable
                onPress={() =>
                  setitemQuantity((prev) => Math.min(40, prev + 1))
                }
              >
                <View
                  style={[styles.quantitySetButton, { borderColor: "#17BC58" }]}
                >
                  <AntDesign name="plus" size={20} color={"#17BC58"} />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartListCard;

const styles = StyleSheet.create({
  quantityRow: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantitySetContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantitySetButton: {
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#C9C9C9",
  },
  quantityTextContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 17,
  },
  itemDescription: {
    flex: 1,
    flexDirection: "row",
  },
  attributeRow: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  attrText: {
    fontSize: 14,
    color: "#6E6E6E",
    paddingTop: 8,
    paddingRight: 10,
  },
  titleRow: {
    flex: 1,
    flexDirection: "column",
  },
  priceText: {
    fontSize: 19,
    fontWeight: "700",
    color: "#2F2F2F",
  },
  titleText: {
    fontSize: 17,
    fontWeight: "600",
    width: "100%",
  },
  closeButton: {
    paddingBottom: 17,
    paddingLeft: 20,
  },
  container: {
    width: "100%",
    height: 110,
    flexDirection: "row",
    marginBottom: 15,
  },
  imageContainer: {
    width: "30%",
    height: "100%",
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
  infoContainer: {
    flex: 1,
    paddingLeft: 15,
    flexDirection: "column",
  },
});
