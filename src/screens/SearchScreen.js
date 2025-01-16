// Import necessary components and libraries
import { StyleSheet, Text, View, FlatList } from "react-native";
import InputBar from "../components/InputBar";
import Octicons from "@expo/vector-icons/Octicons";
import ScreenHeader from "../components/ScreenHeader";
import CartButton from "../components/CartButton";
import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import ItemListCard from "../components/ItemListCard";

const SearchScreen = () => {
  // State for managing search input and filtered results
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  // Get items from Redux store
  const { items } = useSelector((state) => state.items);

  // Debounced search function to prevent excessive filtering
  const handleSearch = useCallback(
    debounce((text) => {
      // Clear results if search text is empty
      if (!text.trim()) {
        setFilteredItems([]);
        return;
      }

      // Filter items based on title, description, or category
      const results = items.filter(
        (item) =>
          item.title.toLowerCase().includes(text.toLowerCase()) ||
          item.description.toLowerCase().includes(text.toLowerCase()) ||
          item.category.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredItems(results);
    }, 300), // Wait 300ms before executing search
    [items]
  );

  return (
    <View style={styles.container}>
      {/* Header with title and cart button */}
      <ScreenHeader
        leftChild={<Text style={styles.titleText}>Search</Text>}
        rightChild={<CartButton />}
      />
      {/* Search input field */}
      <InputBar
        label={"Search"}
        icon={<Octicons name="search" color={"#6E6E6E"} size={25} />}
        inputValue={searchQuery}
        setInputValue={(text) => {
          setSearchQuery(text);
          handleSearch(text);
        }}
      />

      {/* Show empty state message or search results */}
      {searchQuery.length > 0 && filteredItems.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No results found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredItems}
          renderItem={({ item }) => <ItemListCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default SearchScreen;

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "300",
    color: "#000",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStateText: {
    fontSize: 16,
    color: "#6E6E6E",
  },
  listContainer: {
    padding: 10,
  },
});
