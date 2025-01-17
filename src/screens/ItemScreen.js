import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
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
import SubmitButton from "../components/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../redux/features/cart/CartSlice";

const ItemScreen = ({ route }) => {
  const item = route.params.item;
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    // Fetch favorite status from database
  }, [isFavorite]);

  const saleConditional = () => {
    return item.price < item.prevPrice
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
                  color={isFavorite ? "#ED4444" : "#6E6E6E"}
                />
              }
              onPress={() => setIsFavorite(!isFavorite)}
            />
            <View style={{ width: 10 }} />
            <IconButton
              icon={<Feather name={"share"} size={25} color={"#6E6E6E"} />}
              onPress={() => console.log("Favorite")}
            />
            <View style={{ width: 10 }} />
            <CartButton />
          </View>
        }
      />
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

          <View style={styles.buttonSection}>
            <View style={styles.priceContainer}>
              <Text style={[styles.prevPriceText, saleConditional()]}>
                ${item.prevPrice}
              </Text>
              <Text style={styles.priceText}>${item.price}</Text>
            </View>
            <SubmitButton
              label={"Add to Cart"}
              width={220}
              height={70}
              onPress={() => dispatch(addCartItem(item))}
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
    //height: "100%",
    backgroundColor: "#F1F3F2",
  },
});
