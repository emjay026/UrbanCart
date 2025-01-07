import { StyleSheet } from "react-native";
import IconButton from "./IconButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();
  return (
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
  );
};

export default CartButton;
