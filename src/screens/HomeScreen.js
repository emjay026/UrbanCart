import {
  Button,
  FlatList,
  Image,
  Pressable,
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
import HomeBanner from "../components/HomeBanner";

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
        <HomeBanner />
        <View style={styles.categorySeperator}>
          <Text style={styles.categoryTitle}>Categories</Text>
          <Pressable>
            <View style={styles.pressableContainer}>
              <Text style={styles.pressableText}>See all</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.categoryList}>
          <FlatList
            data={Array.from(new Set(item_data.map((item) => item.category)))}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.categoryItem}>
                <Text style={styles.categoryText}>{item}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.itemsList}>
          <FlatList
            data={item_data}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{ gap: 20 }}
            columnWrapperStyle={{ gap: 20 }}
            renderItem={({ item }) => <ItemCard item={item} />}
          />
        </View>
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
  pressableText: {
    fontSize: 16,
    color: colorScheme.accent,
    fontWeight: "500",
  },
  categorySeperator: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryList: {
    paddingLeft: 20,
    marginBottom: 20,
    height: 40,
  },
  categoryItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  categoryText: {
    fontSize: 16,
  },
  itemsList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
