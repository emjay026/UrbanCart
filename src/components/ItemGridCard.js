import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import StarRating from "./StarRating";
import { useNavigation } from "@react-navigation/native";

const ItemGridCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Item", { item })}>
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: item.image }}
            loadingIndicatorSource={require("../../assets/default_image.png")}
            defaultSource={require("../../assets/default_image.png")}
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
    height: 250,
    justifyContent: "center",
  },
  detailsContainer: {
    height: "30%",
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
});
