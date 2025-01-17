import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Button,
  Modal,
} from "react-native";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import ScreenHeader from "../components/ScreenHeader";
import IconButton from "../components/IconButton";
import Octicon from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import StarRating from "../components/StarRating";
import RowBlocks from "../components/RowBlocks";
import Entypo from "@expo/vector-icons/Entypo";
import CartButton from "../components/CartButton";
import AntDesign from "@expo/vector-icons/AntDesign";

const ItemModal = ({ item, showModal, setShowModal }) => {
  const saleConditional = () => {
    return item.price < item.prevPrice
      ? { display: "flex" }
      : { display: "none" };
  };

  return (
    <Modal
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.container}>
        <View style={styles.closeContainer}>
          <Pressable onPress={() => setShowModal(false)}>
            <View style={styles.closeButton}>
              <AntDesign name="close" size={25} color={"#6E6E6E"} />
            </View>
          </Pressable>
        </View>

        <View style={styles.bodyContainer}>
          <View style={styles.imgContainer}>
            <Image source={{ uri: item.image }} style={styles.img} />
          </View>
          <View style={styles.itemInfoContainer}>
            <View style={styles.infoSection}>
              <View style={styles.titleRowContainer}>
                <Text
                  style={styles.titleText}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.title}
                </Text>
                <View style={[styles.onSaleContainer, saleConditional()]}>
                  <Text style={styles.onSaleText}>
                    <Feather name={"percent"} size={14} color={"white"} /> On
                    Sale
                  </Text>
                </View>
              </View>
              <View style={styles.scrollIndicator}>
                <Entypo
                  name={"chevron-thin-down"}
                  color={"#6E6E6E"}
                  size={16}
                />
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.reviewsRow}>
                  <View style={styles.ratingContainer}>
                    <StarRating
                      rating={item.ratings.average}
                      iconSize={19}
                      fontSize={17}
                    />
                  </View>
                  <Text style={styles.ratingsCount}>
                    {item.ratings.count} reviews
                  </Text>
                </View>
                <View style={styles.descriptContainer}>
                  <Text>{item.description}</Text>
                </View>
                <View style={styles.storageSelectionRow}>
                  <RowBlocks data={item.variations.storage} title={"Storage"} />
                </View>
                <View style={styles.colorSelectionRow}>
                  <RowBlocks data={item.variations.colors} title={"Colors"} />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ItemModal;

const styles = StyleSheet.create({
  closeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeButton: {
    padding: 15,
    alignItems: "flex-end",
  },
  titleRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  titleText: {
    width: "70%",
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  descriptContainer: {
    marginBottom: 15,
  },
  scrollIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  onSaleContainer: {
    padding: 10,
    borderRadius: 13,
    backgroundColor: "#ED4444",
  },
  onSaleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },
  ratingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#D6D6D6",
  },
  reviewsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingsCount: {
    color: "#6E6E6E",
  },
  bodyContainer: {
    flex: 1,
  },
  imgContainer: {
    width: "100%",
    height: "45%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  itemInfoContainer: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
  },
  infoSection: {
    flex: 1,
    width: "100%",
    padding: 25,
  },
  priceContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  prevPriceText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#B9B9B9",
    textDecorationLine: "line-through",
  },
  container: {
    flex: 1,
    //height: "100%",
    backgroundColor: "#F1F3F2",
  },
});
