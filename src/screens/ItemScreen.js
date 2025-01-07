import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState, useLayoutEffect, use } from "react";
import globalStyles from "../GlobalStyles";
import BackButton from "../components/BackButton";
import ScreenHeader from "../components/ScreenHeader";
import IconButton from "../components/IconButton";
import Octicon from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = ({ route }) => {
  const item = route.params.item;

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    // Fetch favorite status from database
  }, [isFavorite]);

  return (
    // <SafeAreaView style={styles.safeContainer}>
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
                  color={isFavorite ? "#FF0000" : "#6E6E6E"}
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
            <IconButton
              icon={
                <MaterialCommunityIcons
                  name="cart-outline"
                  size={28}
                  color={"#6E6E6E"}
                />
              }
              onPress={() => navigation.navigate("Cart")}
            />
          </View>
        }
      />
      <View style={styles.bodyContainer}>
        <View style={styles.imgContainer}>
          <Image source={item.image} style={styles.img} />
        </View>
        <View style={styles.itemInfoContainer}>
          <View style={styles.infoSection}>
            <View style={styles.titleRow}></View>
            <View style={styles.reviewsRow}></View>
            <View style={styles.descriptContainer}></View>
            <View style={styles.storageSelectionRow}></View>
            <View style={styles.colorSelectionRow}></View>
          </View>
          <View style={styles.buttonSection}>
            <View style={styles.priceContainer}>
              <Text
                style={[
                  styles.prevPriceText,
                  item.price < item.prevPrice
                    ? { display: "flex" }
                    : { display: "none" },
                ]}
              >
                ${item.prevPrice}
              </Text>
              <Text style={styles.priceText}>${item.price}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
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
    padding: 15,
  },
  buttonSection: {
    width: "100%",
    height: "33%",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#D6D6D6",
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 15,
    alignItems: "center",
  },
  addToCartButton: {
    width: "90%",
    height: "70%",
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
  imgContainer: {
    width: "100%",
    height: "50%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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
