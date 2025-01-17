import { StyleSheet } from "react-native";
import IconButton from "./IconButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";

const CartButton = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigation = useNavigation();
  return (
    <>
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
      <View style={styles.iconBadge}>
        <Text style={styles.badgeText}>{cartItems.length}</Text>
      </View>
    </>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  iconBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    minWidth: 20,
    minHeight: 20,
    padding: 2,
    borderRadius: 100,
    backgroundColor: "#17BC58",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 13,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
});
