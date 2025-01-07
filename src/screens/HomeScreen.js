import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import globalStyles, { colorScheme } from "../GlobalStyles";
import IconButton from "../components/IconButton";
import HomeBanner from "../components/HomeBanner";
import itemData from "../data/DummyData";
import ItemCard from "../components/ItemCard";
import InputBar from "../components/InputBar";
import ScreenHeader from "../components/ScreenHeader";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import RowBlocks from "../components/RowBlocks";

const HomeScreen = ({ navigation }) => {
  return (
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
        <RowBlocks
          data={[
            "All",
            ...Array.from(new Set(itemData.map((item) => item.category))),
          ]}
        />
      </View>
      <View style={styles.itemsList}>
        <FlatList
          data={itemData}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{ gap: 20 }}
          columnWrapperStyle={{ gap: 20 }}
          renderItem={({ item }) => <ItemCard item={item} />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
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
