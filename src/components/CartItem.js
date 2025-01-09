import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  Button,
} from "react-native";
import { useState } from "react";
import itemData from "../data/DummyData";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ItemModal from "../modal/ItemModal";

const CartItem = () => {
  const index = 3;
  const [showModal, setShowModal] = useState(false);
  const [itemQuantity, setitemQuantity] = useState(1);

  const showVariation = (data) => {
    return data === undefined ? { display: "none" } : { display: "flex" };
  };
  return (
    <Pressable onPress={() => setShowModal(true)}>
      <ItemModal
        item={itemData[index]}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={itemData[index].image} style={styles.img} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.itemDescription}>
            <View style={styles.titleRow}>
              <Text
                style={styles.titleText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {itemData[index].title}
              </Text>
              <View style={styles.attributeRow}>
                <Text
                  style={[
                    styles.attrText,
                    showVariation(itemData[index].variations.storage[0]),
                  ]}
                >
                  {itemData[index].variations.storage[0]}
                </Text>
                <Text
                  style={[
                    styles.attrText,
                    showVariation(itemData[index].variations.colors[0]),
                  ]}
                >
                  {itemData[index].variations.colors[0]}
                </Text>
              </View>
            </View>
            <Pressable onPress={() => console.log("Remove")}>
              <View style={styles.closeButton}>
                <AntDesign name="close" size={22} color={"#6E6E6E"} />
              </View>
            </Pressable>
          </View>
          <View style={styles.quantityRow}>
            <Text style={styles.priceText}>${itemData[index].price}</Text>
            <View style={styles.quantitySetContainer}>
              <View style={styles.quantitySetButton}>
                <AntDesign name="minus" size={20} color={"#6E6E6E"} />
              </View>
              <Text style={styles.quantityText}>{itemQuantity}</Text>
              <View style={styles.quantitySetButton}>
                <AntDesign name="plus" size={20} color={"#6E6E6E"} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  quantityRow: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //borderWidth: 1,
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
  quantityText: {
    fontSize: 18,
    padding: 12,
  },
  itemDescription: {
    flex: 1,
    flexDirection: "row",
    //borderWidth: 1,
  },
  attributeRow: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    //borderWidth: 1,
  },
  attrText: {
    fontSize: 15,
    color: "#6E6E6E",
    paddingTop: 8,
    paddingRight: 10,
  },
  titleRow: {
    flex: 1,
    flexDirection: "column",
    //borderWidth: 1,
  },
  priceText: {
    fontSize: 19,
    fontWeight: "700",
    color: "#2F2F2F",
  },
  titleText: {
    fontSize: 19,
    fontWeight: "600",
    width: "100%",
    //borderWidth: 1,
  },
  closeButton: {
    paddingBottom: 17,
    paddingLeft: 20,
    //borderWidth: 1,
  },
  container: {
    width: "100%",
    height: 130,
    flexDirection: "row",
    //borderWidth: 1,
  },
  imageContainer: {
    width: "35%",
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
    //borderWidth: 1,
  },
});
