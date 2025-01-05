import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import StarRating from "./StarRating";
import { useNavigation } from "@react-navigation/native";

const ItemCard = ({ image, title, price, ratings }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.pressableContainer}
      onPress={() => navigation.navigate("Item")}
    >
      <View style={styles.cardContainer}>
        <Image source={image} style={styles.img} resizeMode="cover" />
        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
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
    </Pressable>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  pressableContainer: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 200,
    maxHeight: 300,
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
    borderRadius: 20,
  },
  img: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#EFF1F0",
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 14,
    color: "#6E6E6E",
    flexWrap: "wrap",
    width: "100%",
  },
  priceText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
});
