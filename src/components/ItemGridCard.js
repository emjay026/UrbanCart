import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import StarRating from "./StarRating";
import { useNavigation } from "@react-navigation/native";

const ItemGridCard = ({ item }) => {
  const navigation = useNavigation();

  const saleConditional = () => {
    return item.price < item.prevPrice
      ? { display: "flex" }
      : { display: "none" };
  };

  return (
    <Pressable onPress={() => navigation.navigate("Item", { item: item })}>
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={
              item?.image
                ? { uri: item.image }
                : require("../../assets/default_image.png")
            }
            style={styles.img}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
              <Text
                style={styles.titleText}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
            </View>
            <View style={{ width: 6 }} />
            <View>
              <StarRating rating={item.ratings.average} />
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.onSaleContainer, saleConditional()]}>
        <Text style={styles.onSaleText}>On Sale</Text>
      </View>
    </Pressable>
  );
};

export default ItemGridCard;

const styles = StyleSheet.create({
  pressableContainer: {
    flex: 1,
  },
  cardContainer: {
    width: 170,
    height: 220,
    justifyContent: "center",
    //borderWidth: 1,
  },
  detailsContainer: {
    height: "25%",
  },
  imgContainer: {
    flex: 1,
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
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 13,
    color: "#6E6E6E",
    width: "100%",
  },
  priceText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceContainer: {
    height: "35%",
  },
  onSaleContainer: {
    position: "absolute",
    top: 7,
    right: 7,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#ED4444",
    opacity: 0.8,
  },
  onSaleText: {
    fontSize: 10,
    fontWeight: "500",
    color: "white",
  },
});
