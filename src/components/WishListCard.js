import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { removeWishListItem } from "../redux/features/wishlist/WishListSlice";
import { useNavigation } from "@react-navigation/native";

const WishListCard = ({ wishItem }) => {
  const item = wishItem.item;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Pressable onPress={() => navigation.navigate("Item", { item: item })}>
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
                  {Object.values(wishItem.variation)
                    .filter((value) => value !== undefined && value !== null)
                    .join(", ")}
                </Text>
              </View>
            </View>
            <Pressable
              onPress={() => dispatch(removeWishListItem(wishItem.id))}
            >
              <View style={styles.closeButton}>
                <AntDesign name="close" size={22} color={"#6E6E6E"} />
              </View>
            </Pressable>
          </View>
          <View style={styles.quantityRow}>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default WishListCard;

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
