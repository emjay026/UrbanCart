import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import globalStyles, { colorScheme } from "../GlobalStyles";
import BackButton from "../components/BackButton";
import IconButton from "../components/IconButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { item_data } from "../data/DummyData";
import StarRating from "../components/StarRating";
import ItemCard from "../components/ItemCard";
import InputBar from "../components/InputBar";
import ScreenHeader from "../components/ScreenHeader";
import Octicons from "@expo/vector-icons/Octicons";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <View style={styles.container}>
        <ScreenHeader
          leftChild={<Text style={globalStyles.titleText}>Discover</Text>}
          rightChild={
            <IconButton
              icon={
                <MaterialCommunityIcons
                  name="cart-outline"
                  size={28}
                  color={colorScheme.textBlack}
                />
              }
              onPress={() => navigation.navigate("Cart")}
            />
          }
        />
        <InputBar
          label={"Search"}
          icon={<Octicons name="search" color={"#6E6E6E"} size={25} />}
          onPress={() => {
            console.log("Search");
          }}
        />

        <ItemCard {...item_data[0]} />
        <ItemCard {...item_data[1]} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
