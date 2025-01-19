import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SearchListCard = ({ item }) => {
  //const item = wishItem.item;
  const navigation = useNavigation();

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
                <Text style={styles.attrText}>{item.category}</Text>
              </View>
            </View>
          </View>
          <View style={styles.quantityRow}>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SearchListCard;

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
    //borderWidth: 1,
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
    //borderWidth: 1,
  },
  quantityText: {
    fontSize: 17,
    //borderWidth: 1,
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
    fontSize: 14,
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
    fontSize: 17,
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
    height: 110,
    flexDirection: "row",
    marginBottom: 15,
    //borderWidth: 1,
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
    //borderWidth: 1,
  },
});
