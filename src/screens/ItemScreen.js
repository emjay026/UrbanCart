import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import globalStyles from "../GlobalStyles";
import BackButton from "../components/BackButton";
import ScreenHeader from "../components/ScreenHeader";
import IconButton from "../components/IconButton";
import Octicon from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = ({ route }) => {
  const item = route.params.item;

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    // Fetch favorite status from database
  }, [isFavorite]);

  return (
    <SafeAreaView style={globalStyles.safeContainer}>
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
          </View>
        }
      />
      <View style={styles.bodyContainer}>
        <View style={styles.imgContainer}>
          <Image source={item.image} style={styles.img} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  rightContainer: {
    flexDirection: "row",
  },
  imgContainer: {
    width: "100%",
    height: "65%",
    borderWidth: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
