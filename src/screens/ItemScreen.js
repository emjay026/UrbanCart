import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
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
import SubmitButton from "../components/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addWishListItem,
  removeWishListItem,
} from "../redux/features/wishlist/WishListSlice";
import { addCartItem, removeCartItem } from "../redux/features/cart/CartSlice";
import * as Crypto from "expo-crypto";

const ItemScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const { wishList } = useSelector((state) => state.wishlist);
  const currItem = route.params.item;

  const [selectedStorage, setSelectedStorage] = useState(
    currItem.variations.storage[0]
  );
  const [selectedColor, setSelectedColor] = useState(
    currItem.variations.colors[0]
  );
  const [currentCartItem, setCurrentCartItem] = useState(null);
  const [currentWishItem, setCurrentWishItem] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishList, setIsInWishList] = useState(false);

  const getCurrListItem = (item, list) => {
    return list.find(
      (listItem) =>
        listItem.item.id === item.id &&
        listItem.variation.storage === selectedStorage &&
        listItem.variation.color === selectedColor
    );
  };

  const newItem = async (currItem) => {
    const uuid = await Crypto.randomUUID();
    return {
      id: uuid,
      item: { ...currItem },
      quantity: 1,
      variation: {
        storage: selectedStorage,
        color: selectedColor,
      },
    };
  };

  useEffect(() => {
    const cartItem = getCurrListItem(currItem, cartList);
    const wishListItem = getCurrListItem(currItem, wishList);

    setCurrentCartItem(cartItem);
    setCurrentWishItem(wishListItem);
    setIsInCart(!!cartItem);
    setIsInWishList(!!wishListItem);
  }, [cartList, wishList, selectedStorage, selectedColor, currItem]);

  const handleAddToCart = async () => {
    if (isInCart) {
      dispatch(removeCartItem(currentCartItem.id));
      setIsInCart(false);
    } else {
      const newCartItem = await newItem(currItem);
      dispatch(addCartItem(newCartItem));
      setIsInCart(true);
    }
  };

  const handleAddToWishList = async () => {
    if (isInWishList) {
      dispatch(removeWishListItem(currentWishItem.id));
      setIsInWishList(false);
    } else {
      const newWishItem = await newItem(currItem);
      dispatch(addWishListItem(newWishItem));
      setIsInWishList(true);
    }
  };

  const saleConditional = () => {
    return currItem.price < currItem.prevPrice
      ? { display: "flex" }
      : { display: "none" };
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        leftChild={<BackButton />}
        rightChild={
          <View style={styles.rightContainer}>
            <IconButton
              icon={
                <Octicon
                  name={"heart-fill"}
                  size={25}
                  color={isInWishList ? "#ED4444" : "#6E6E6E"}
                />
              }
              onPress={handleAddToWishList}
            />
            <View style={{ width: 10 }} />
            <IconButton
              icon={<Feather name={"share"} size={25} color={"#6E6E6E"} />}
              onPress={() => console.log("share")}
            />
            <View style={{ width: 10 }} />
            <CartButton />
          </View>
        }
      />
      <View style={styles.bodyContainer}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: currItem.image }} style={styles.img} />
        </View>
        <View style={styles.itemInfoContainer}>
          <View style={styles.infoSection}>
            <View style={styles.titleRowContainer}>
              <Text
                style={styles.titleText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {currItem.title}
              </Text>
              <View style={[styles.onSaleContainer, saleConditional()]}>
                <Text style={styles.onSaleText}>
                  <Feather name={"percent"} size={14} color={"white"} /> On Sale
                </Text>
              </View>
            </View>
            <View style={styles.scrollIndicator}>
              <Entypo name={"chevron-thin-down"} color={"#6E6E6E"} size={16} />
              <Text style={styles.scrollText}>Scroll</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.reviewsRow}>
                <View style={styles.ratingContainer}>
                  <StarRating
                    rating={currItem.ratings.average}
                    iconSize={19}
                    fontSize={17}
                  />
                </View>
                <Text style={styles.ratingsCount}>
                  {currItem.ratings.count} reviews
                </Text>
              </View>
              <View style={styles.descriptContainer}>
                <Text>{currItem.description}</Text>
              </View>
              <View style={styles.storageSelectionRow}>
                <RowBlocks
                  data={currItem.variations.storage}
                  title={"Storage"}
                  selected={selectedStorage}
                  setSelected={setSelectedStorage}
                />
              </View>
              <View style={styles.colorSelectionRow}>
                <RowBlocks
                  data={currItem.variations.colors}
                  title={"Colors"}
                  selected={selectedColor}
                  setSelected={setSelectedColor}
                />
              </View>
            </ScrollView>
          </View>

          <View style={styles.buttonSection}>
            <View style={styles.priceContainer}>
              <Text style={[styles.prevPriceText, saleConditional()]}>
                ${currItem.prevPrice}
              </Text>
              <Text style={styles.priceText}>${currItem.price}</Text>
            </View>
            <SubmitButton
              label={isInCart ? "Remove from Cart" : "Add to Cart"}
              width={220}
              height={70}
              onPress={handleAddToCart}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
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
  scrollText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6E6E6E",
    marginLeft: 10,
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
  buttonSection: {
    width: "100%",
    height: "33%",
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#D6D6D6",
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  addToCartButton: {
    width: "90%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#17BC58",
    borderRadius: 22,
  },
  addToCartText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
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
  priceText: {
    fontSize: 26,
    fontWeight: "600",
    color: "#3C3C3C",
  },

  rightContainer: {
    flexDirection: "row",
  },

  safeContainer: {
    flex: 1,
    backgroundColor: "#F1F3F2",
  },
  container: {
    flex: 1,
    backgroundColor: "#F1F3F2",
  },
});
