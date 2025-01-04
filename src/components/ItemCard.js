import { Image, StyleSheet, Text, View } from "react-native";
import StarRating from "./StarRating";

const ItemCard = ({ image, title, price, ratings }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.img} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View>
          <StarRating rating={ratings.average} />
        </View>
      </View>
      <View>
        <Text style={styles.priceText}>${price}</Text>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: 200,
    maxHeight: 200,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  imgContainer: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#EFF1F0",
  },
  titleText: {
    fontSize: 14,
    color: "#6E6E6E",
  },
  priceText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
});
