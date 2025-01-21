import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Pressable,
} from "react-native";
import BackButton from "../components/BackButton";
import ScreenHeader from "../components/ScreenHeader";
import IconButton from "../components/IconButton";
import Entypo from "@expo/vector-icons/Entypo";
import CartListCard from "../components/CartListCard";
import SubmitButton from "../components/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { use, useEffect, useState } from "react";
import { setCartError } from "../redux/features/cart/CartSlice";
import { Input } from "react-native-elements";
import InputModal from "../modal/InputModal";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cartList, error } = useSelector((state) => state.cart);

  const [showCouponModal, setShowCouponModal] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  let [total, setTotal] = useState(0);

  let [subTotal, setSubTotal] = useState(0);
  let [deliveryFee, setDeliveryFee] = useState(99);
  let [discount, setDiscount] = useState(0);
  let [numOfItems, setNumOfItems] = useState(0);

  useEffect(() => {
    if (showCouponModal === false) {
      setPressed(false);
    }
  }, [showCouponModal]);

  useEffect(() => {
    setNumOfItems(cartList.reduce((acc, item) => acc + item.quantity, 0));
    setSubTotal(
      cartList.reduce((acc, item) => acc + item.item.price * item.quantity, 0)
    );
    setTotal(
      subTotal > 0
        ? subTotal + deliveryFee - (subTotal * discount) / 100
        : subTotal
    );
    if (error) {
      Alert.alert("Error", error);
      dispatch(setCartError(null));
    }
  }, [dispatch, cartList, subTotal, deliveryFee, discount, error]);

  return (
    <View style={styles.container}>
      <ScreenHeader
        leftChild={<BackButton />}
        centerChild={<Text style={styles.titleText}>My Cart</Text>}
        rightChild={
          <IconButton
            icon={
              <Entypo
                name={"dots-three-horizontal"}
                size={25}
                color={"#6E6E6E"}
              />
            }
            onPress={() => console.log("More")}
          />
        }
      />
      <View style={styles.bodyContainer}>
        <FlatList
          data={cartList}
          renderItem={({ item }) => <CartListCard cartItem={item} />}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#D6D6D6" }} />
          )}
          contentContainerStyle={{ gap: 15 }}
        />
      </View>
      <View style={styles.promoCodeSection}>
        <Pressable
          style={[styles.promoButton, pressed && styles.promoButtonPressed]}
          onPressIn={() => setPressed(true)}
          onPress={() => setShowCouponModal(true)}
        >
          <View>
            <Text style={[styles.prePromoText, pressed && styles.promoText]}>
              Apply coupon
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.checkoutBoard}>
        <View style={styles.checkoutInfoRow}>
          <Text style={styles.boardText}>Item Count:</Text>
          <Text style={styles.boardNums}>{numOfItems}</Text>
        </View>
        <View style={styles.checkoutInfoRow}>
          <Text style={styles.boardText}>Subtotal:</Text>
          <Text style={styles.boardNums}>${subTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.checkoutInfoRow}>
          <Text style={styles.boardText}>Delivery Fee:</Text>
          <Text style={styles.boardNums}>${deliveryFee.toFixed(2)}</Text>
        </View>
        <View style={styles.checkoutInfoRow}>
          <Text style={styles.boardText}>Discount:</Text>
          <Text style={styles.boardNums}>{discount}%</Text>
        </View>
        <View style={styles.checkoutInfoRow}>
          <Text style={styles.boardText}>Total:</Text>
          <Text style={styles.boardNums}>${total.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <SubmitButton
          label={"Checkout for $" + total.toFixed(2)}
          width="90%"
          onPress={() => console.log("Checkout")}
        />
      </View>
      <InputModal
        visible={showCouponModal}
        setVisible={setShowCouponModal}
        inputValue={couponCode}
        setInputValue={setCouponCode}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  checkoutInfoRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  checkoutBoard: {
    height: "14%",
    paddingHorizontal: 20,
  },
  boardText: {
    fontSize: 14,
    fontWeight: "500",
  },
  boardNums: {
    fontSize: 15,
    fontWeight: "600",
  },
  promoCodeSection: {
    width: "100%",
    height: "9%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  promoButton: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#C9C9C9",
    backgroundColor: "#FFFFFF",
  },
  promoButtonPressed: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#17BC58",
    backgroundColor: "#FFFFFF",
  },
  prePromoText: {
    fontSize: 16,
    color: "#6E6E6E",
    textAlign: "center",
  },
  promoText: {
    fontSize: 16,
    color: "#17BC58",
    textAlign: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  buttonSection: {
    width: "100%",
    height: "13%",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#D6D6D6",
    paddingTop: 15,
    paddingBottom: 32,
    paddingHorizontal: 25,
  },
  buttonContainer: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#17BC58",
  },

  addToCartText: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
});
