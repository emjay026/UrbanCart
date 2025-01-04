import { StyleSheet, Text, View } from "react-native";

const FavScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FavScreen</Text>
    </View>
  );
};

export default FavScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
