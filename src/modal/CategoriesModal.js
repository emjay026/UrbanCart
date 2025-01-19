import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";

const CategoriesModal = ({
  visible,
  setVisible,
  categories,
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => setVisible(false)}
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Categories</Text>
            <Pressable onPress={() => setVisible(false)}>
              <Text style={styles.closeButton}>×</Text>
            </Pressable>
          </View>
          <FlatList
            data={categories}
            numColumns={2}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.categoryItem,
                  selectedCategory === item && styles.selectedCategory,
                ]}
                onPress={() => {
                  onSelectCategory(item);
                  setVisible(false);
                }}
              >
                <Text
                  style={[
                    styles.categoryText,
                    { color: selectedCategory === item ? "#FFF" : "#000" },
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "500",
  },
  closeButton: {
    fontSize: 30,
    color: "#666",
  },
  categoryItem: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  selectedCategory: {
    backgroundColor: "#17BC58",
  },
});

export default CategoriesModal;
