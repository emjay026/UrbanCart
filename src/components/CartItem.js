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
  const index = 4;
  const [showModal, setShowModal] = useState(false);
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
          <View style={styles.titleRow}>
            <Text
              style={styles.titleText}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {itemData[index].title}
            </Text>
            <View style={styles.closeButton}>
              <AntDesign name="close" size={20} color={"#6E6E6E"} />
            </View>
          </View>
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
          <View style={styles.quantityRow}></View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  attributeRow: {
    flexDirection: "row",
    width: "100%",
  },
  attrText: {
    fontSize: 16,
    color: "#6E6E6E",
    paddingRight: 10,
  },
  quantityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    width: "70%",
    borderWidth: 1,
  },
  closeButton: {
    borderWidth: 1,
  },
  container: {
    width: "100%",
    height: 140,
    flexDirection: "row",
  },
  imageContainer: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    aspectRatio: 1,
    height: "100%",
    resizeMode: "contain",
    borderRadius: 20,
    backgroundColor: "#EFF1F0",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
  },
});
