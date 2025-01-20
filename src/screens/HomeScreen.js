import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import globalStyles, { colorScheme } from "../GlobalStyles";
import HomeBanner from "../components/HomeBanner";
import ItemGridCard from "../components/ItemGridCard";
import ScreenHeader from "../components/ScreenHeader";
import RowBlocks from "../components/RowBlocks";
import CartButton from "../components/CartButton";
import { useState, useEffect } from "react";
import { readItems } from "../services/database/items/ItemDBOps";
import { readCartList } from "../services/database/cart/CartDBOps";
import { readWishListList } from "../services/database/wishlist/WishListDBOps";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import CategoriesModal from "../modal/CategoriesModal";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(readItems());
    dispatch(readCartList());
    dispatch(readWishListList());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory, items]);

  return (
    <View style={styles.container}>
      <ScreenHeader
        leftChild={<Text style={globalStyles.titleText}>Discover</Text>}
        rightChild={<CartButton />}
      />
      <HomeBanner />
      <View style={styles.categorySeperator}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <Pressable onPress={() => setModalVisible(true)}>
          <View style={styles.pressableContainer}>
            <Text style={styles.pressableText}>See all</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.categoryList}>
        <RowBlocks
          data={[
            "All",
            ...Array.from(new Set(items.map((item) => item.category))),
          ]}
          setSelected={setSelectedCategory}
          selected={selectedCategory}
        />
      </View>
      <View style={styles.itemsList}>
        <FlatList
          data={filteredItems}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{ gap: 20 }}
          columnWrapperStyle={{ gap: 20 }}
          renderItem={({ item }) => <ItemGridCard item={item} />}
        />
      </View>
      <CategoriesModal
        visible={modalVisible}
        setVisible={setModalVisible}
        categories={[
          "All",
          ...Array.from(new Set(items.map((item) => item.category))),
        ]}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Loading loading={loading} />
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
