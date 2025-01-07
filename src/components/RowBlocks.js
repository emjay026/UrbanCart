import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { useState } from "react";

const RowBlocks = ({ data, title }) => {
  const [selected, setSelected] = useState(data[0]);
  return (
    <View style={{ display: data.length === 0 ? "none" : "flex" }}>
      <Text
        style={[
          styles.categoryTitle,
          { display: title === undefined ? "none" : "flex" },
        ]}
      >
        {title}
      </Text>
      <View style={styles.categoryList}>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.categoryItem,
                {
                  borderColor: selected === item ? "#17BC58" : "#3C3C3C",
                  backgroundColor: selected === item ? "#17BC58" : "#FFFFFF",
                },
              ]}
              onPress={() => setSelected(item)}
            >
              <View>
                <Text
                  style={[
                    styles.categoryText,
                    { color: selected === item ? "#ffffff" : "#3C3C3C" },
                  ]}
                >
                  {item}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default RowBlocks;

const styles = StyleSheet.create({
  categoryList: {
    marginBottom: 20,
    height: 40,
  },
  categoryItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
