import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import React, { useEffect } from "react";
import ScreenHeader from "../components/ScreenHeader";
import IconButton from "../components/IconButton";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import WishListCard from "../components/WishListCard";
import { setWishListError } from "../redux/features/wishlist/WishListSlice";

const WishListScreen = () => {
  const dispatch = useDispatch();
  const { wishList, error } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
      dispatch(setWishListError(null));
    }
  }, [dispatch, wishList]);

  return (
    <View style={styles.container}>
      <ScreenHeader
        centerChild={<Text style={styles.titleText}>Wish List</Text>}
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
          data={wishList}
          renderItem={({ item }) => <WishListCard wishItem={item} />}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#D6D6D6" }} />
          )}
          contentContainerStyle={{ gap: 15 }}
        />
      </View>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
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
    padding: 20,
  },

  buttonSection: {
    width: "100%",
    height: "14%",
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
