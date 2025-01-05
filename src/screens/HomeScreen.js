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

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <View style={styles.container}>
        <View style={globalStyles.headerContainer}>
          <View>
            <Text style={globalStyles.titleText}>Discover</Text>
          </View>
          <IconButton
            child={
              <MaterialCommunityIcons
                name="cart-outline"
                size={28}
                color={colorScheme.textBlack}
              />
            }
            onPress={() => {
              navigation.navigate("Cart");
            }}
          />
        </View>
        <Text style={styles.text}>HomeScreen</Text>
        {/* <Image
          source={item_data[0].image}
          style={{ width: 200, height: 200, backgroundColor: "lightgray" }}
          resizeMode="contain"
        /> */}
        <ItemCard {...item_data[0]} />
        <ItemCard {...item_data[1]} />
        {/* <Button
          title="Go to Item"
          onPress={() => navigation.navigate("Item")}
        /> */}
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
